import React from 'react'
import { Container,Typography } from '@mui/material';

function About() {
  return (
    <>
    <Typography variant="h1" align="center">About Us</Typography>

    <Container sx={{ mt: 4, display: 'flex',backgroundColor:'black',margin:'30px',borderRadius:'20px', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>

        <Typography sx={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, non natus omnis distinctio ut iusto perspiciatis voluptatum aperiam, fugiat provident vitae velit nostrum, ullam soluta itaque molestias mollitia eligendi.</Typography>
  <img src="./src/assets/Aboutus/1.jpg"  sx={{borderRadius:'30px'}}  alt="nopeee"  />
    </Container>
    
    </>
  )
}

export default About