import React, { useState } from 'react'
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Common styling for TextField
  const textFieldStyles = {
    m: 1.5, // Adjusted margin for better spacing
    width: '100%',
    maxWidth: '400px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff', // Input background color
      borderRadius: '8px',     // Slightly rounded corners for input
      '& fieldset': {
        borderColor: '#c5c5c5', // Border color
        borderWidth: '1px',     // Border width
      },
      '&:hover fieldset': {
        borderColor: '#1e88e5', // Hover state border color
        borderWidth: '1px',     // Border width on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1e88e5', // Focused border color
        borderWidth: '1px',     // Border width when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: '#555',           // Label color
      fontSize: '14px',        // Slightly smaller label font size
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#1e88e5',        // Focused label color
    },
    '& .MuiOutlinedInput-input': {
      color: '#333',           // Text color inside the input
    },
  };

  // Styling for Button
  const buttonStyles = {
    mt: 2, // Adjusted margin top
    backgroundColor: '#1e88e5', // Button background color
    color: '#fff',              // Button text color
    '&:hover': {
      backgroundColor: '#1565c0', // Button hover color
    },
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',        // Rounded corners for button
    border: '2px solid transparent', // Border style for button
    '&:hover': {
      borderColor: '#1e88e5',   // Border color on hover
      borderWidth: '2px',       // Border width on hover
    },
  };

  return (
    <div className='form'>
        <div 
      className="container" 
      style={{ 
        backgroundColor: '#fff', // Container background color
        padding: '20px', 
        borderRadius: '8px', 
        width: '100%', 
        maxWidth: '400px',
        margin: 'auto',           // Centers the container horizontally
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop : '150px',
        border: '1px solid #e0e0e0', // Border color and width for the container
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      {/* Name Input */}
      <TextField
        id="outlined-name"
        label="Name"
        variant="outlined"
        sx={textFieldStyles}
      />

      {/* Password Input */}
      <TextField
        id="outlined-password"
        label="Password"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        sx={textFieldStyles}
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
          textAlign: 'left', // Aligns text to the start
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
<br />
      <Typography variant="body2" gutterBottom>
        Not a member? <a href="#signup" style={{ color: '#1e88e5', textDecoration: 'none' }}>Signup</a>
      </Typography>
    </div>

    </div>
    
  );
}
