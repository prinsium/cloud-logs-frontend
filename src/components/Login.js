import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import image from "../images/logo192.png";

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/Home");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Box component="span" sx={{ p: 2}}>
        <img src={image} className="img-fluid" width={'100px'} alt="LOGO"/>
        </Box>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={credentials.email}
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
              value={credentials.password}
              onChange={onChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button></Box>
                <div className="text-center">
                  <Link aria-current="page" to='/Signup'>New User? Sign Up</Link>
                </div>
                </Box>
                </Container>
    </ThemeProvider>
            
    )
}

export default Login