import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig';  
import HotelImage from '../assets/Images/Hotel.avif';  // Replace with your image

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expirationDate: ''
        
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Save payment data to Firestore
            await addDoc(collection(db, 'payments'), formData);

            alert('Payment data submitted successfully!');
            setFormData({
                cardholderName: '',
                cardNumber: '',
                expirationDate: ''
                
            });
        } catch (error) {
            alert('Error submitting payment data: ' + error.message);
        } finally {
            setLoading(false);
        }
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
                        bgcolor: 'rgba(255, 255, 255, 0.5)',  // Transparent white background
                        backdropFilter: 'blur(10px)',        // Blur effect for a frosted look
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Payment Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Cardholder Name"
                            name="cardholderName"
                            value={formData.cardholderName}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2,
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
                            fullWidth
                            label="Card Number"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 ,
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
                            fullWidth
                            label="Expiration Date (MM/YY)"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 ,
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
                            // color="primary" 
                            fullWidth
                            disabled={loading}
                            sx={{color:'white',background:'black',
                                

                            }}
                        >
                            {loading ? 'Submitting...' : 'Submit Payment'}
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default PaymentForm;
