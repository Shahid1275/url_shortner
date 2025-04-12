"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.deleteUserRole = exports.updateUser = exports.updateUserRole = exports.getUserById = exports.getUsers = exports.getUserRoleById = exports.getUserRoles = exports.login = exports.signup = void 0;
const __1 = require("..");
const bcrypt_1 = require("bcrypt");
const jwt = __importStar(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const zod_1 = require("zod");
const signupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password_hash: zod_1.z.string().min(6),
    username: zod_1.z.string().min(3),
    role_id: zod_1.z.number().positive(),
});
const loginSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password_hash: zod_1.z.string().min(6),
    // role_id:z.number().positive()
});
const signup = async (req, res) => {
    console.log("REQUEST BODY: ", req.body);
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid input here', errors: result.error.errors });
    }
    else {
        const { email, password_hash, username, role_id } = result.data;
        try {
            let user = await __1.prismaClient.user.findFirst({ where: { email } });
            if (user) {
                return res.status(409).send('User Already exists!');
            }
            const newUser = await __1.prismaClient.user.create({
                data: {
                    username,
                    email,
                    password_hash: (0, bcrypt_1.hashSync)(password_hash, 10),
                    role_id,
                },
            });
            // console.log(newUser, ":::::::::::");
            res.json(newUser);
        }
        catch (error) {
            // console.log(error, "@@@@@");
            return res.status(500).send({ error });
        }
    }
    ;
};
exports.signup = signup;
const login = async (req, res) => {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid input', errors: result.error.errors });
    }
    const { username, password_hash } = result.data;
    try {
        // Find the user by username
        const user = await __1.prismaClient.user.findFirst({ where: { username } });
        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'Your credentials do not match!' });
        }
        // Compare the input password with the stored hashed password
        const passwordMatch = (0, bcrypt_1.compareSync)(password_hash, user.password_hash);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Your credentials do not match!' });
        }
        // If credentials are correct, sign and return the JWT token
        const token = jwt.sign({
            userId: user.user_id,
            username: user.username,
            email: user.email,
            role_id: user.role_id,
        }, secrets_1.JWT_SECRET, { expiresIn: '1h' } // Token expiration time
        );
        console.log("Token generated:", token);
        return res.json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).send({ error: 'An error occurred while processing your request' });
    }
};
exports.login = login;
const getUserRoles = async (req, res) => {
    try {
        const roles = await __1.prismaClient.user_role.findMany({ where: { is_deleted: false } });
        res.json(roles);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.getUserRoles = getUserRoles;
const getUserRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await __1.prismaClient.user_role.findUnique({ where: { role_id: Number(id) } });
        if (!role || role.is_deleted) {
            return res.status(404).send('Role not found');
        }
        res.json(role);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.getUserRoleById = getUserRoleById;
const getUsers = async (req, res) => {
    try {
        const users = await __1.prismaClient.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await __1.prismaClient.user.findUnique({ where: { user_id: id } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.getUserById = getUserById;
const updateUserRole = async (req, res) => {
    const { id } = req.params;
    const { role_name, description } = req.body;
    try {
        const updatedRole = await __1.prismaClient.user_role.update({
            where: { role_id: Number(id) },
            data: { role_name, description, updated_at: new Date() },
        });
        res.json(updatedRole);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.updateUserRole = updateUserRole;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password, role_id } = req.body;
    try {
        const updatedUser = await __1.prismaClient.user.update({
            where: { user_id: (id) },
            data: { username, email, password_hash: (0, bcrypt_1.hashSync)(password, 10), role_id, updated_at: new Date() },
        });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.updateUser = updateUser;
const deleteUserRole = async (req, res) => {
    const { id } = req.params;
    try {
        await __1.prismaClient.user_role.update({
            where: { role_id: Number(id) },
            data: { is_deleted: true, deleted_at: new Date() },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.deleteUserRole = deleteUserRole;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await __1.prismaClient.user.update({
            where: { user_id: (id) },
            data: { is_deleted: true, deleted_at: new Date() },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=auth.js.map