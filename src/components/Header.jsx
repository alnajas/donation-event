import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
     
      <AppBar
        position="sticky"
        sx={{
          mb: 2,
          background: "linear-gradient(90deg, #000, #0d0d0d, #111)",
          boxShadow: "0 0 10px rgba(0,188,212,0.3)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#00e5ff",
              textShadow: "0 0 8px rgba(0,229,255,0.6)",
            }}
          >
            Local Donation Organizer
          </Typography>

          
            <Link to={''}>
            <Button
             
              sx={{
                color: "#e0f7fa",
                mx: 1,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  color: "#00bcd4",
                  textShadow: "0 0 6px rgba(0,188,212,0.8)",
                },
              }}
            >
              Home
            </Button></Link>
            {/* <Link to={'authentication'}>
            <Button
             
              sx={{
                color: "#e0f7fa",
                mx: 1,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  color: "#00bcd4",
                  textShadow: "0 0 6px rgba(0,188,212,0.8)",
                },
              }}
            >
              Login
            </Button></Link> */}

          
          
        </Toolbar>
      </AppBar>

    
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          mb: 6,
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(0,188,212,0.1), rgba(0,188,212,0.05), rgba(0,188,212,0.1))",
          textAlign: "center",
          py: 2,
          borderTop: "1px solid rgba(0,188,212,0.2)",
          borderBottom: "1px solid rgba(0,188,212,0.2)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor:'black',
            fontWeight: "bold",
            color: "#00e5ff",
            textShadow: "0 0 12px rgba(0,229,255,0.7)",
          }}
        >
          Give What You Can, Change What You See
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
