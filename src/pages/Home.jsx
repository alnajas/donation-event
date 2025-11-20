import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#0d0d0d",
        color: "#f5f5f5",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      
      <Box
        id="home"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          py: 12,
          background: "linear-gradient(135deg, #000000, #1a1a1a)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#00bcd4",
              textShadow: "0 0 10px rgba(0,188,212,0.6)",
            }}
          >
            Make a Difference in Your Community
          </Typography>
          <Typography variant="h6" color="grey.400" sx={{ mb: 4 }}>
            Join us in organizing local donations and bringing help where it's
            needed most.
          </Typography>

          <Link to={"/login"}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #00bcd4, #26c6da)",
                color: "#000",
                fontWeight: "bold",
                px: 4,
                py: 1.2,
                borderRadius: "25px",
                "&:hover": {
                  background: "linear-gradient(90deg, #26c6da, #80deea)",
                },
              }}
            >
              Get Involved
            </Button>
          </Link>
        </Container>
      </Box>

    
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        sx={{ py: 8, textAlign: "center", backgroundColor: "#121212" }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, color: "#00e5ff" }}
        >
          Donation Drives
        </Typography>
        <EventCard />
        
      
      </Box>


      <Box id="gallery" sx={{ py: 10, backgroundColor: "#1c1c1c" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 6,
              color: "#4dd0e1",
              textShadow: "0 0 6px rgba(77,208,225,0.6)",
            }}
          >
            Moments of Giving
          </Typography>
          <Grid container spacing={3}>
            {[
              "https://www.rentecdirect.com/blog/wp-content/uploads/2016/12/bigstock-Happy-volunteer-family-holding-85091345.jpg",
              "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              "https://images.unsplash.com/photo-1543353071-873f17a7a088",
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
              "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
              "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/18/17/istock-1127566187.jpg",
            ].map((url, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper
                  elevation={6}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 3,
                    transition: "0.4s",
                    bgcolor: "#2b2b2b",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 0 20px rgba(0,188,212,0.3)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={`${url}?auto=format&fit=crop&w=800&q=80`}
                    alt={`gallery-${i}`}
                    sx={{ width: "100%", height: 250, objectFit: "cover" }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

  
      <Box id="contact" sx={{ py: 10, backgroundColor: "#0d0d0d" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 4,
              color: "#00bcd4",
              textShadow: "0 0 8px rgba(0,188,212,0.6)",
            }}
          >
            Contact Us
          </Typography>
          <Typography align="center" color="grey.400" sx={{ mb: 4 }}>
            Have questions or want to get involved? We'd love to hear from you.
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                style: { color: "#fff" },
              }}
              InputLabelProps={{
                style: { color: "#aaa" },
              }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                style: { color: "#fff" },
              }}
              InputLabelProps={{
                style: { color: "#aaa" },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              InputProps={{
                style: { color: "#fff" },
              }}
              InputLabelProps={{
                style: { color: "#aaa" },
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #00bcd4, #26c6da)",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(90deg, #26c6da, #80deea)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <IconButton color="primary" href="https://facebook.com">
              <Facebook sx={{ color: "#00bcd4" }} />
            </IconButton>
            <IconButton color="primary" href="https://instagram.com">
              <Instagram sx={{ color: "#00bcd4" }} />
            </IconButton>
            <IconButton color="primary" href="mailto:info@donate.org">
              <Email sx={{ color: "#00bcd4" }} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
