import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, IconButton, Button, TextField, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { getDonationEvent } from '../../services/allAPI';
function UserEventView() {
    const [eventId,setEventId]=useState("")
    const [events, setEvents] = useState([]);
    const [searchItem,setSearchItem]=useState("")
    const [filteredData,setFilteredData]=useState([])
      const getlist = async () => {
        const response = await getDonationEvent();
        console.log( response);
        setEvents(response?.data || []);
      
      };
    
      useEffect(() => {
        getlist();
      }, []);

      
      const handlesearch=(e)=>{
        
        setSearchItem(e.target.value)
        console.log(searchItem);
        const filtered = events.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())||
        item.locationName?.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.organizerName?.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.organizerEmail?.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.donationTypes?.join(', ').toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered)
    console.log('Filtered products:', filteredData);
    getlist()
        
      }
  return (
     <>
     <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2, 
    borderTop: '1px solid rgba(0,229,255,0.2)',
    pt: 3,
    pb: 3,
    textAlign: 'center',
    flexWrap: 'wrap', 
  }}
>
  <Link to="/list" style={{ textDecoration: 'none' }}>
    <Button variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #00bcd4, #26c6da)",
                color: "#000",
                fontWeight: "bold",
                px: 4,
                py: 1.2,
                borderRadius: "25px",
                
              }}>
      View & Download
    </Button>
  </Link>

  <TextField onChange={handlesearch}
    placeholder="Search..."
    size="small"
    sx={{
      width: { xs: '80%', sm: '250px' },
      backgroundColor: 'white',
      borderRadius: 1,
    }}
  />
</Box>
{(searchItem ? filteredData : events).length > 0 ? (
        (searchItem ? filteredData : events).map((event, index) => (
      
          <Box 
            key={index}
            sx={{
              width: '90%',
              left:'5%',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(10,10,10,0.9))',
              color: 'white',
              borderRadius: 2,
              p: 3,
              mb: 3,
              position: 'relative',
              overflow: 'hidden',
             
            
            }}
          >
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#00e5ff', color: '#000', mr: 2 }}>
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
                <Typography variant="body2" sx={{ color: '#aaa' }}>
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : 'No date available'}
                </Typography>
              </Box>
            </Box>
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
            <Typography
              variant="body1"
              sx={{
                color: '#ccc',
                mb: 3,
                lineHeight: 1.6,
                fontSize: '1rem',
              }}
            >
              {event.description || 'No description provided.'}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(0,229,255,0.2)',
                pt: 2,
              }}
            >
              

             
                
            </Box>
          </Box>
        ))
      ) : (
        <Typography sx={{ color: '#aaa', textAlign: 'center', mt: 3 }}>
          No events found.
        </Typography>
      )}
          
    

    </>
  )
}

export default UserEventView
