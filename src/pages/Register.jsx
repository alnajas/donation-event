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

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful! You can now log in.");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #070707ff, #060606ff)",
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
            Create Account
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
            Join our donation community 🌍
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
              Sign Up
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 3, color: "#666" }}>
            Already have an account?{" "}
            <span
              style={{ color: "#00e5ff",
          textShadow: "0 0 10px rgba(0,229,255,0.6)", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;
