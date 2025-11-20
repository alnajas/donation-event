import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate('/createevent');

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      alert(`Welcome back, ${formData.email}!`);
      localStorage.setItem("isLoggedIn", true);
      setTimeout(() => navigate("/createevent"), 1000);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <Box 
      sx={{
        background: "linear-gradient(135deg, #040404ff, #0b0c0cff)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2,  color: "#00e5ff",
          textShadow: "0 0 10px rgba(0,229,255,0.6)", }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
            Login to continue your journey of giving 💙
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                py: 1.2,
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: 2,
              }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 3, color: "#666" }}>
            Don’t have an account?{" "}
            <span
              style={{  color: "#00e5ff",
          textShadow: "0 0 10px rgba(0,229,255,0.6)", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
