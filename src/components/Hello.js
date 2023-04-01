import React from 'react';
import { Typography, Button, Box } from '@mui/material';

import image1 from "../images/cloud-log-img-2.png"

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

const Hello = () => {
  return (
    <div className='container mt-1'>
    <Box  sx={style}>
      <Box textAlign="center">
        <Typography variant="h3" component="h1" color='grey' gutterBottom>
          Your Notes on Cloud
        </Typography>
        <img src={image1} className="img-fluid" width='300px' alt="Cloud-Logs"/>
      </Box>
    </Box>
    </div>
  )
}

export default Hello