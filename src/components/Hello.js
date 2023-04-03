import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import Signup from './Signup';
import Home from './Home'

import image1 from "../images/cloud-log-img-2.png"

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

const Hello = () => {
  let navigate = useNavigate();
  
  return (
    <div className='container'>
    <Box  sx={style}>
      <Box textAlign="center">
        <Typography variant="h3" component="h1" color='grey' gutterBottom>
          Your Notes on Cloud
        </Typography>
        { !localStorage.getItem('token')? (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{mb:2}}>
        <Button variant="contained" color="secondary" component={Link} to='/Signup'>
          Get Started
        </Button>
        </Box>
        ):(
          <Box display='flex' justifyContent='center' alignItems='center' sx={{mb:2}}>
          <Button variant="contained" color="secondary" component={Link} to='/Home'>
            My Notes
          </Button>
          </Box> 
        )}
        <img src={image1} className="img-fluid" width='300px' alt="Cloud-Logs"/>
      </Box>
    </Box>
    </div>
  )
}

export default Hello
