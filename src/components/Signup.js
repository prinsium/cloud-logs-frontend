import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import image1 from "../images/logo192.png";

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", confirmpassword: ""}) 
     
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
          if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/Home");
    }else{
      alert("invalid credentials")
    }
  }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box fullWidth
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              m: 1
            }}
          >
             <Box component="span" sx={{ p: 1}}>
        <img src={image1} className="img-fluid" width={'100px'} alt="LOGO"/>
        </Box>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              id="name"
              label="name"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /><div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{minLength: 5}}
              onChange={onChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{minLength: 5}}
              onChange={onChange}
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button></Box>
                <div className="text-center">
                  <Link aria-current="page" to='/Login'>Existing User? Sign In</Link>
                </div>
                </Box>
                </Container>
    </ThemeProvider>
    )
}

export default Signup