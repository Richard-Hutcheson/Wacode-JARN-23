import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './LoginMenu.css';


function LoginInfo() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <div className="backgroundContainer">
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className="mainContainer"
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" style={{ color: 'black' }}>
              Welcome to our app!
              <div className="loginContainer">
                <AccountBoxIcon></AccountBoxIcon> Please Login
              </div>
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                style={{ color: 'black' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ color: 'black' }}
              />
              <div className="signinContainer">
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} >
                  Sign In
                </Button>
              </div>
            </Box>
          </Box>
        </Container>
    
      </div>
    </div>
  );
}

export default LoginInfo;