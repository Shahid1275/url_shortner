import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  Box,
  InputAdornment,
  Fade,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Validation schema
const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    reset();
    setSuccessMessage("");
    setErrorMessage("");
  };

  const onSubmit = async (data) => {
    try {
      const endpoint = isLogin
        ? "http://localhost:3000/api/auth/login"
        : "http://localhost:3000/api/auth/signup";

      const requestData = isLogin
        ? { username: data.username, password: data.password }
        : {
            username: data.username,
            email: data.email,
            password: data.password,
            role_id: 2, // Default to regular user role
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "An error occurred");
      }

      if (isLogin) {
        // Handle login success
        localStorage.setItem("token", result.data.token);
        const decoded = jwtDecode(result.data.token);
        localStorage.setItem("user", JSON.stringify(decoded));

        // Set success message and redirect after 3 seconds
        setSuccessMessage("Login successful! Redirecting to dashboard...");
        setTimeout(() => {
          navigate("/home/dashboard");
        }, 3000);
      } else {
        // Handle signup success
        setSuccessMessage("Signup successful! Please login.");
        setTimeout(() => {
          setIsLogin(true); // Switch to login form after 3 seconds
          setSuccessMessage("");
          reset();
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(error.message || "An error occurred. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Image Section - Kept exactly as you provided */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img
            src="Mobile login-pana.png"
            height={500}
            alt="Login Illustration"
          />
        </div>

        {/* Form Section - Kept your styling with minor adjustments */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            maxWidth: 400,
            margin: "auto",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
            zIndex: 1,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Fade in timeout={1000}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  marginBottom: 3,
                  textAlign: "center",
                  color: "#333",
                }}
              >
                Welcome to Our Service
              </Typography>
            </Fade>

            {/* Messages with 3-second timeout */}
            {successMessage && (
              <Alert severity="success" sx={{ marginBottom: 2 }}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <Typography variant="h5" gutterBottom textAlign="center">
              {isLogin ? "Login" : "Signup"}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              {!isLogin && (
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  {...register("email")}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              <TextField
                label="Username"
                fullWidth
                margin="normal"
                {...register("username")}
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                {...register("password")}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                {isLogin ? "Login" : "Signup"}
              </Button>

              <Typography variant="body2" align="center" marginTop={2}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Button onClick={toggleForm} color="primary">
                  {isLogin ? " Signup" : " Login"}
                </Button>
              </Typography>
            </form>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default LoginSignup;
