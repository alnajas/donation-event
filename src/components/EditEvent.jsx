import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  Paper,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { UpdateDonationEventAPI } from "../services/allAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 5,
  px: 4,
  pb: 5,
};

function EditEvent({ eventData, events, setEvents }) {
  const [open, setOpen] = useState(false);
  const [localEvent, setLocalEvent] = useState(eventData);

  const handleOpen = () => {
    setLocalEvent(eventData); // load fresh data each time
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const typesList = ["Clothes", "Books", "Food", "Money", "Other"];

  const addType = (type) => {
    setLocalEvent((data) => ({
      ...data,
      donationTypes: [...(data.donationTypes || []), type],
    }));
  };

  const updateEvent = async () => {
    try {
      const response = await UpdateDonationEventAPI(localEvent.id,localEvent);
      console.log("Updated event:", response.data);

      // ✅ Update the event in main list
      setEvents((prevEvents) =>
        prevEvents.map((ev) =>
          ev.id === response.data.id ? response.data : ev
        )
      );

      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          borderColor: "#00e5ff",
          color: "#00e5ff",
          borderRadius: 2,
          textTransform: "none",
          px: 3,
          "&:hover": {
            backgroundColor: "#00e5ff",
            color: "#000",
            boxShadow: "0 0 10px #00e5ff",
          },
        }}
      >
        Edit Event
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-event-modal"
      >
        <Box sx={{ ...style }}>
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
              Edit Donation Event
            </Typography>

            <Box component="form" sx={{ display: "grid", gap: 2 }}>
              <TextField
                label="Title"
                value={localEvent.title || ""}
                onChange={(e) =>
                  setLocalEvent({ ...localEvent, title: e.target.value })
                }
                InputLabelProps={{ style: { color: "#bbb" } }}
                InputProps={{
                  style: {
                    color: "white",
                    background: "#1a1a1a",
                    borderRadius: 6,
                  },
                }}
              />

              <TextField
                label="Short description"
                multiline
                rows={3}
                value={localEvent.description || ""}
                onChange={(e) =>
                  setLocalEvent({ ...localEvent, description: e.target.value })
                }
                InputLabelProps={{ style: { color: "#bbb" } }}
                InputProps={{
                  style: {
                    color: "white",
                    background: "#1a1a1a",
                    borderRadius: 6,
                  },
                }}
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Date"
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "#bbb" } }}
                  value={localEvent.date || ""}
                  onChange={(e) =>
                    setLocalEvent({ ...localEvent, date: e.target.value })
                  }
                  InputProps={{
                    style: {
                      color: "white",
                      background: "#1a1a1a",
                      borderRadius: 6,
                    },
                  }}
                />
              </Stack>

              <TextField
                label="Location name"
                value={localEvent.locationName || ""}
                onChange={(e) =>
                  setLocalEvent({
                    ...localEvent,
                    locationName: e.target.value,
                  })
                }
                InputLabelProps={{ style: { color: "#bbb" } }}
                InputProps={{
                  style: {
                    color: "white",
                    background: "#1a1a1a",
                    borderRadius: 6,
                  },
                }}
              />

              <TextField
                label="Address"
                value={localEvent.address || ""}
                onChange={(e) =>
                  setLocalEvent({ ...localEvent, address: e.target.value })
                }
                InputLabelProps={{ style: { color: "#bbb" } }}
                InputProps={{
                  style: {
                    color: "white",
                    background: "#1a1a1a",
                    borderRadius: 6,
                  },
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
              </Box>

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  onClick={handleClose}
                  sx={{
                    color: "#ccc",
                    border: "1px solid #555",
                    "&:hover": { backgroundColor: "#222" },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={updateEvent}
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
                  Update
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default EditEvent;
