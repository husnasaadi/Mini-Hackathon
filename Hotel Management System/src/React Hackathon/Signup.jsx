import { Box, TextField, Typography, Button, Paper, Link, Select, MenuItem, FormControl } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';  // Import SweetAlert2
import { auth } from '../Firebase/firebaseConfig';
import formBg from '../../src/assets/Images/Hotel.avif';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || password.length < 8 || password !== confirmPassword || !role) {
      setError("Please fill out all fields correctly.");
      return;
    }

    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccess(true);
        // Display SweetAlert2 popup on success
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'You will be redirected to the login page shortly.',
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect to the login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
      });
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
        flexDirection: { xs: 'column', md: 'row' }, // Responsive: column on small, row on medium/large screens
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '20px', md: '0' }, // Add padding on small screens
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
            padding: { xs: '20px', md: '40px' }, // Smaller padding on small screens
            borderRadius: '20px',
            maxWidth: '400px',
            width: { xs: '90%', sm: '80%', md: '400px' }, // Responsive width
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '2px solid black',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
            Create Account
          </Typography>
          <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
              label="Full Name"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ marginBottom: '20px' }}
            />
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                displayEmpty
              >
                <MenuItem value="" disabled>Select Role</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
              </Select>
            </FormControl>

            {error && <Typography color="error" sx={{ marginBottom: '20px' }}>{error}</Typography>}
            {success && <Typography color="success.main" sx={{ marginBottom: '20px' }}>Signup successful! Redirecting...</Typography>}
            
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ background: 'black', color: 'white', '&:hover': { background: '#808080' } }}
            >
              Signup
            </Button>
          </form>
          <Typography sx={{ marginTop: '20px', fontWeight: 'bold' }}>
            Already have an account? <Link href="/login" sx={{ color: '#808080', textDecoration: 'none' }}>Login</Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Signup;
