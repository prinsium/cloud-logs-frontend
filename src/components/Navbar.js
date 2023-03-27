import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import '../App.css'
import image1 from "../images/logo192.png"

export const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="default">
      <Toolbar>
      <Box component="span" sx={{ p: 2}}>
      <img src={image1} className="img-fluid" width={'30px'} alt="LOGO"/>
      </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cloud-Logs
        </Typography>
        {!localStorage.getItem('token')?
        <IconButton component={Link} to={"/Login"}>
          <PersonAddAltRoundedIcon />
        </IconButton>:<IconButton onClick={handleLogout}><PersonRemoveRoundedIcon /></IconButton>}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar