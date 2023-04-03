import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
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
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{flexGrow: 1, mr: 2, display: 'flex', flexDirection: 'row'}}>
        <a class="navbar-brand" href="/">
      <img src={image1} className="img-fluid" width={'30px'} alt="LOGO" />
      </a>
      <a class="navbar-brand" href="/">
        <Typography variant="h6" sx={{flexGrow: 1, ml: 3,  display: { xs: 'none', sm: 'block' }}}>
        Cloud-Logs
        </Typography></a>
        </Box>
        {!localStorage.getItem('token')?
        <IconButton component={Link} to={"/Login"}>
          <PersonAddAltRoundedIcon />
        </IconButton>:<IconButton onClick={handleLogout}><PersonRemoveRoundedIcon /></IconButton>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar