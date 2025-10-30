import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Foot() {
  return (
    <div>
     
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Local Donation Organizer — Made with <Favorite fontSize="small" /> for the community
        </Typography>
      </Box>
    </div>
  )
}

export default Foot
