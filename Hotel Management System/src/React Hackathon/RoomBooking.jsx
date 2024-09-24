import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Box, Container } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import HotelImage from '../assets/Images/DoubleRoom.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RoomBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const roomTypes = ['Single', 'Double', 'Suite', 'Deluxe'];
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);  
      await addDoc(collection(db, 'roomBookings'), formData); // Save to Firestore
      
      setMessage('Booking submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        roomType: '',
        checkIn: '',
        checkOut: '',
      });
      
      // Redirect to payment page after successful form submission
      navigate('/payment');
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Failed to submit booking');
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${HotelImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            p: 4,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Room Booking Form
          </Typography>
          {message && <Typography color="success" gutterBottom>{message}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField
              select
              fullWidth
              label="Room Type"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            >
              {roomTypes.map((type, index) => (
                <MenuItem key={`${type}-${index}`} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Check-In Date"
              name="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Check-Out Date"
              name="checkOut"
              type="date"
              value={formData.checkOut}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              required
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                sx={{ color: 'white', background: 'black' }}
                variant="contained"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Booking'}
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default RoomBookingForm;
