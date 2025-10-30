import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

  

    
 
import { addDonationEvent } from "../services/allAPI";
import { Link,useNavigate } from "react-router-dom";

export default function CreateEvent() {
    const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    locationName: "",
    address: "",
    donationTypes: [],
    capacity: "",
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
  });

  const typesList = ["Clothes", "Books", "Food", "Money", "Other"];

  const addEventData = async () => {
    try {
      const response = await addDonationEvent(eventData);
      console.log(response);
 
toast.success('Event Created!', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: false,
progress: undefined,
theme: "dark",

});
 setTimeout(() => navigate("/"), 1000);
 
      
    } catch (err) {
      console.log(err);
    }
  };

  const addType = (type) => {
    setEventData((data) => ({
      ...data,
      donationTypes: [...data.donationTypes, type],
    }));
  };

  return (
    <Paper
      sx={{
        p: 4,
        background: "linear-gradient(145deg, #0f0f0f, #1c1c1c)",
        color: "white",
        boxShadow: "0 0 25px rgba(0, 229, 255, 0.2)",
        borderRadius: 3,
        
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        sx={{
          color: "#00e5ff",
          textShadow: "0 0 10px rgba(0,229,255,0.6)",
          fontWeight: "bold",
        }}
      >
        Create Donation Drive
      </Typography>

      <Box component="form" sx={{ display: "grid", gap: 2 }}>
        <TextField
          label="Title"
          value={eventData.title}
          onChange={(e) =>
            setEventData({ ...eventData, title: e.target.value })
          }
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
          }}
        />
        <TextField
          label="Short description"
          multiline
          rows={3}
          value={eventData.description}
          onChange={(e) =>
            setEventData({ ...eventData, description: e.target.value })
          }
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
          }}
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true, style: { color: "#bbb" } }}
            value={eventData.date}
            onChange={(e) =>
              setEventData({ ...eventData, date: e.target.value })
            }
            InputProps={{
              style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
            }}
          />
        </Stack>

        <TextField
          label="Location name (e.g., Community Center)"
          value={eventData.locationName}
          onChange={(e) =>
            setEventData({ ...eventData, locationName: e.target.value })
          }
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
          }}
        />
        <TextField
          label="Address"
          value={eventData.address}
          onChange={(e) =>
            setEventData({ ...eventData, address: e.target.value })
          }
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
          }}
        />

        <Box>
          <Typography variant="subtitle1" sx={{ color: "#00e5ff" }}>
            Donation Types
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
            {typesList.map((item) => (
              <Button
                key={item}
                onClick={() => addType(item)}
                size="small"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#00e5ff",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#00bcd4",
                    boxShadow: "0 0 10px #00e5ff",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Box>

        <TextField
          label="Capacity (optional)"
          value={eventData.capacity}
          type="number"
          onChange={(e) =>
            setEventData({ ...eventData, capacity: e.target.value })
          }
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{
            style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
          }}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label="Organizer name"
            value={eventData.organizerName}
            onChange={(e) =>
              setEventData({ ...eventData, organizerName: e.target.value })
            }
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
            }}
          />
          <TextField
            label="Organizer email"
            value={eventData.organizerEmail}
            onChange={(e) =>
              setEventData({ ...eventData, organizerEmail: e.target.value })
            }
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
            }}
          />
          <TextField
            label="Organizer phone"
            value={eventData.organizerPhone}
            onChange={(e) =>
              setEventData({ ...eventData, organizerPhone: e.target.value })
            }
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "white", background: "#1a1a1a", borderRadius: 6 },
            }}
          />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Link to={'/'}>
          <Button
            sx={{
              color: "#ccc",
              border: "1px solid #555",
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            Cancel
          </Button></Link>
       
          <Button
            onClick={addEventData}
            variant="contained"
            type="button"
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #00bcd4)",
              color: "black",
              fontWeight: 600,
              boxShadow: "0 0 15px rgba(0,229,255,0.6)",
              "&:hover": {
                background: "linear-gradient(90deg, #00bcd4, #00e5ff)",
                boxShadow: "0 0 25px rgba(0,229,255,0.9)",
              },
            }}
          >
            Create
          </Button>
      
        </Stack>
      </Box>
       <ToastContainer />
    </Paper>
  );
}
