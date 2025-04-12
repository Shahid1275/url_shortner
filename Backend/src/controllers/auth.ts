import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { z } from "zod";

// Schema definitions
const signupSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  role_id: z.number().positive("Role ID must be a positive number"),
});

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const signup = async (req: Request, res: Response) => {
  try {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.errors,
      });
    }

    const { email, password, username, role_id } = result.data;

    // Check if user exists
    const existingUser = await prismaClient.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email or username already exists",
      });
    }

    // Check if role exists
    const roleExists = await prismaClient.user_role.findUnique({
      where: { role_id },
    });

    if (!roleExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid role ID",
      });
    }

    // Create new user
    const newUser = await prismaClient.user.create({
      data: {
        username,
        email,
        password_hash: hashSync(password, 10),
        role_id,
      },
      select: {
        user_id: true,
        username: true,
        email: true,
        user_role: {
          select: {
            role_name: true,
          },
        },
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: newUser.user_id,
        username: newUser.username,
        email: newUser.email,
        role_id: newUser.user_role.role_name,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: newUser,
        token,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.errors,
      });
    }

    const { username, password } = result.data;

    // Find user
    const user = await prismaClient.user.findFirst({
      where: { username },
      include: {
        user_role: {
          select: {
            role_name: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Verify password
    if (!compareSync(password, user.password_hash)) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.user_id,
        username: user.username,
        email: user.email,
        role_id: user.user_role.role_name,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          role: user.user_role.role_name,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getUserRoles = async (req: Request, res: Response) => {
  try {
    const roles = await prismaClient.user_role.findMany({
      where: { is_deleted: false },
    });
    res.json(roles);
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const getUserRoleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const role = await prismaClient.user_role.findUnique({
      where: { role_id: Number(id) },
    });
    if (!role || role.is_deleted) {
      return res.status(404).send("Role not found");
    }
    res.json(role);
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prismaClient.user.findUnique({ where: { user_id: id } });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const updateUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role_name, description } = req.body;

  try {
    const updatedRole = await prismaClient.user_role.update({
      where: { role_id: Number(id) },
      data: { role_name, description, updated_at: new Date() },
    });
    res.json(updatedRole);
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, password, role_id } = req.body;

  try {
    const updatedUser = await prismaClient.user.update({
      where: { user_id: id },
      data: {
        username,
        email,
        password_hash: hashSync(password, 10),
        role_id,
        updated_at: new Date(),
      },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const deleteUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prismaClient.user_role.update({
      where: { role_id: Number(id) },
      data: { is_deleted: true, deleted_at: new Date() },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prismaClient.user.update({
      where: { user_id: id },
      data: { is_deleted: true, deleted_at: new Date() },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
};
