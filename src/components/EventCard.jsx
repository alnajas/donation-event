import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Button, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { getDonationEvent } from '../services/allAPI';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function EventCard() {
  const [events, setEvents] = useState([]);

  const getlist = async () => {
    const response = await getDonationEvent();
    console.log("API Response:", response);
    setEvents(response?.data || []);
  };

  useEffect(() => {
    getlist();
  }, []);

  const visibleEvents = events.slice(0, 2);

  return (
    <>
      {visibleEvents.length > 0 ? (
        visibleEvents.map((event, index) => (
          <Box
            key={index}
            sx={{
              width: '90%',
              left: '5%',
              background: 'linear-gradient(145deg, #0a0a0a, #121212)',
              color: 'white',
              borderRadius: 3,
              p: 4,
              mb: 4,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 25px rgba(0,229,255,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(145deg, #101010, #1e1e1e)',
                transform: 'translateY(-5px)',
                boxShadow: '0 0 40px rgba(0,229,255,0.4)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(to right, transparent, #00e5ff, transparent)',
              },
            }}
          >
          
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Avatar
                sx={{
                  bgcolor: '#00e5ff',
                  color: '#000',
                  fontWeight: 700,
                  boxShadow: '0 0 15px #00e5ff',
                }}
              >
                {event.title?.[0]?.toUpperCase() || 'E'}
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#00e5ff',
                    textShadow: '0 0 10px rgba(0,229,255,0.8)',
                  }}
                >
                  {event.title || 'Untitled Event'}
                </Typography>
                <Typography variant="body2" sx={{ color: '#bbb', fontSize:'medium'}}>
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : 'No date available'}
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />

           
            <Stack spacing={1.2}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="body2" sx={{ color: '#ccc' }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                {event.startTime || 'N/A'} - {event.endTime || 'N/A'}
              </Typography>

              <Typography variant="body2" sx={{ color: '#ccc' }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                {event.locationName || 'No location'} — {event.address || 'No address'}
              </Typography>
                </Stack>
              

              <Typography variant="body2" sx={{ color: '#ccc',display: 'flex', alignItems: 'left' }}>
                <GroupIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                Capacity: {event.capacity || 'N/A'}
              </Typography>

              <Typography variant="body2" sx={{ color: '#ccc' }}>
                <VolunteerActivismIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                Donation Types: {event.donationTypes?.join(', ') || 'None'}
              </Typography>

              <Typography variant="body2" sx={{ color: '#ccc' }}>
                <EmailIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                {event.organizerEmail || 'No email'}
              </Typography>

              <Typography variant="body2" sx={{ color: '#ccc' }}>
                <PhoneIcon fontSize="small" sx={{ mr: 1, color: '#00e5ff' }} />
                {event.organizerPhone || 'No phone'}
              </Typography>
            </Stack>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: '#aaa',
                lineHeight: 1.6,
                fontSize: '0.95rem',
              }}
            >
              {event.description || 'No description provided.'}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography sx={{ color: '#aaa', textAlign: 'center', mt: 3 }}>
          No events found.
        </Typography>
      )}

     
      {events.length >= 1 && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Link to="/eventlist" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00e5ff',
                color: '#000',
                borderRadius: 2,
                textTransform: 'none',
                px: 4,
                py: 1,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#00bcd4',
                  boxShadow: '0 0 20px #00e5ff',
                },
              }}
            >
              View Events
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
}

export default EventCard;
