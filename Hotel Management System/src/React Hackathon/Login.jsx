import { Box, TextField, Typography, Button, Paper, Link } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import Swal from 'sweetalert2';  // Import SweetAlert2
import formBg from '../../src/assets/Images/Hotel.avif';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Firebase authentication
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Trigger SweetAlert on success
          Swal.fire({
            title: 'Welcome',
            text: 'You have successfully logged in!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });

          // Navigate to the dashboard after the alert
          setTimeout(() => {
            navigate('/admin');
          }, 2000);
        })
        .catch(() => {
          setError("Invalid email or password");
        });
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        background: `url(${formBg}) no-repeat center center`,
        backgroundSize: 'cover',
        position: 'relative',
        filter: 'brightness(0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: '10px', sm: '20px' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: { xs: '20px', sm: '40px' },
            borderRadius: '20px',
            maxWidth: { xs: '90%', sm: '400px' },
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '2px solid black',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            Login
          </Typography>
          {error && <Typography color="error" sx={{ marginBottom: '20px' }}>{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email" 
              fullWidth 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              sx={{
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField 
              label="Password" 
              type="password" 
              fullWidth 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              sx={{
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{
                background: 'black', 
                color: 'white', 
                '&:hover': { background: '#808080' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Login
            </Button>
          </form>

          <Typography sx={{ marginTop: '20px', fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
            Don't have an account? <Link href="/" sx={{ color: '#808080', textDecoration: 'none' }}>Signup</Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
