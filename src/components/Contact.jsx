import React from 'react'
import { Container,Typography,Box,TextField,Button } from '@mui/material';

function Contact() {
  return (
    <>
    <Typography variant="h1" align="center">Contact</Typography>

    <Container sx={{ mt: 4,border: '2px solid red',padding:'50px',mw: '20vw',height:'15vh',display: 'flex',backgroundColor:'black',margin:'30px',borderRadius:'20px ', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <Container maxWidth="sm" sx={{display:'flex',backgroundColor:'black',borderRadius:'10px',maxWidth:'5vw' ,border: '2px solid red',padding:'60px 0px' ,flexDirection:'column', color:'white'}} >
        <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            sx={{ margin: '10px',backgroundColor:'white',borderRadius:'10px' }}
          />
          <TextField
            name="number"
            label="Phone number"
            variant="outlined"
            sx={{ margin: '10px',backgroundColor:'white',borderRadius:'10px' }}
          />
          <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            sx={{ margin: '10px',backgroundColor:'white',borderRadius:'10px' }}
          />
          <TextField
            name="number"
            label="Phone number"
            variant="outlined"
            sx={{ margin: '10px',backgroundColor:'white',borderRadius:'10px' }}
          />
          <TextField
            name="number"
            label="Message"
            variant="outlined"
            sx={{ margin: '10px',backgroundColor:'white',borderRadius:'10px' }}
          />
          <Button variant="contained" sx={{maxWidth:'30px',backgroundColor:'orange'}}>Submit</Button>
          <div>
  <Typography sx={{ color: 'orange' }}>
    Create your own free forms 
    <Typography component="span" sx={{ color: 'blue',margin:'5px' }}>
        to generate leads from your website
    </Typography>
  </Typography>
</div>


      </Container>
      <Container fixed >
      <Typography variant="h3" sx={{color:'white'}}>Tell Us About E-commerece</Typography>
      <Typography variant="h3" sx={{color:'#ff7a59'}} >Vision and Online Business Needs!</Typography>
      <Typography sx={{color:'white'}}  >We have years of ecperience providing our clients with e-commerece solutions and management services</Typography>
      <Container fixed sx={{display:'flex',margin:'10px',backgroundColor:'black'}}> 
      <Button variant="outlined" sx={{borderRadius:'15px',margin:'10px',border:'3px solid #ff7a59',color:'white',padding:'10px 30px'}}>Get Started</Button>
      <Button variant="outlined" sx={{borderRadius:'15px',margin:'10px',border:'3px solid #ff7a59',color:'white',padding:'10px 30px'}}>Live Chat</Button>

      </Container>
      </Container>
    </Container>
    
    </>
  )
}

export default Contact   