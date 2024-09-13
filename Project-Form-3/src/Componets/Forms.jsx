import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(''); // To track username/email
  const [password, setPassword] = useState(''); // To track password

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Log the form values (username/email and password) to the console
    console.log('Username/Email:', username);
    console.log('Password:', password);
  };

  // Common styling for TextField
  const textFieldStyles = {
    m: 1.5,
    width: '100%',
    maxWidth: '400px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff',
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#c5c5c5',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#1e88e5',
        borderWidth: '1px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1e88e5',
        borderWidth: '1px',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#555',
      fontSize: '14px',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#1e88e5',
    },
    '& .MuiOutlinedInput-input': {
      color: '#333',
    },
  };

  // Styling for Button
  const buttonStyles = {
    mt: 2,
    backgroundColor: '#1e88e5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    border: '2px solid transparent',
    '&:hover': {
      borderColor: '#1e88e5',
      borderWidth: '2px',
    },
  };

  return (
    <div className='form'>
      <div 
        className="container" 
        style={{ 
          backgroundColor: '#fff',
          padding: '20px', 
          borderRadius: '8px', 
          width: '100%', 
          maxWidth: '400px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '150px',
          border: '1px solid #e0e0e0',
        }}
      >
        <img src={'./download.png'} alt="Logo" style={{ height: "60px" }} />

        <Typography variant="h4" gutterBottom id="login">
          Instagram
        </Typography>

        {/* Form start */}
        <form onSubmit={handleFormSubmit}>

          {/* Name Input */}
          <TextField
            id="outlined-name"
            label="Phone number, username, or email"
            variant="outlined"
            sx={textFieldStyles}
            value={username}  // Set the input value to state
            onChange={(e) => setUsername(e.target.value)}  // Update state on change
          />

          {/* Password Input */}
          <TextField
            id="outlined-password"
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            sx={textFieldStyles}
            value={password}  // Set the input value to state
            onChange={(e) => setPassword(e.target.value)}  // Update state on change
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography 
            variant="body2" 
            gutterBottom
            style={{ 
              width: '100%', 
              textAlign: 'left', 
              marginBottom: '16px',
              marginLeft: '16px'
            }}
          >
            Forgot Password?
          </Typography>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={buttonStyles}
          >
            Login
          </Button>

        </form>
        {/* Form end */}

        <br />
        <Typography variant="body2" gutterBottom>
          Not a member? <a href="#signup" style={{ color: '#1e88e5', textDecoration: 'none' }}>Signup</a>
        </Typography>
      </div>
    </div>
  );
}
