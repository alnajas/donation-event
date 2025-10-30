import React, { useEffect, useState } from "react";
import {
  Typography,Box,Container,
  Paper,
  Table,
  TableBody,TableCell,TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import { getDonationEvent } from "../services/allAPI";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
function EventList() {
    const [events,setEvents]=useState([])
     const getlist = async () => {
        try{
            
            const response = await getDonationEvent()
            console.log( response);
            setEvents(response?.data || []);
        }
           catch(err){
            console.log(err);
            
           } 
          }
        
          useEffect(() => {
            getlist()
          }, [])

          const handleDownload=async()=>{
            const data= document.getElementById("result")
            console.log(data);
            const canvas=await html2canvas(data,{scale:2})
            console.log(canvas);
            const imgURL=canvas.toDataURL('image/png')
            console.log(imgURL);
            //4.generate PDF
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    //image to pdf
    pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('Event.pdf')
            
            
          }
    
  return (
     <div>
        <Box sx={{textAlign:"center"}}>
             <Button variant='contained' sx={{mb:5}} onClick={handleDownload}>
        Download List
      </Button>
        </Box>
                <Box 
            sx={{
              py: 10,
              textAlign: "center",
              backgroundColor: "#f3f6f9",
            }}
          >
            <Container   id="result" maxWidth="md">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#1976d2",
                  mb: 4,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                Event Records
              </Typography>
    
              <TableContainer
            
                component={Paper}
                sx={{
                  animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                  borderRadius: 3,
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Center</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Organizer</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((don, index) => (
                      <TableRow key={index}>
                        <TableCell>{don.title}</TableCell>
                        <TableCell>{don.date}</TableCell>
                        <TableCell>{don.locationName}</TableCell>
                        <TableCell>{don.address}</TableCell>
                        <TableCell>{don.donationTypes.join(',')}</TableCell>
                        <TableCell>{don.organizerName}</TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
    
        </div>
  )
}

export default EventList
