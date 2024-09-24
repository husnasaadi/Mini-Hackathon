import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import axios from 'axios';

function BookingForm() {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const customer = { name: customerName, email: customerEmail, phone: customerPhone };
        const booking = { customer_id: 1, booking_date: bookingDate, service };
        
        try {
            const response = await axios.post('http://localhost:3000/bookings', booking);
            console.log(response.data);
            // Reset form fields after submission
            setCustomerName('');
            setCustomerEmail('');
            setCustomerPhone('');
            setBookingDate('');
            setService('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 3, border: '1px solid #ccc', borderRadius: 2, boxShadow: 2, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Booking Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Customer Name"
                    variant="outlined"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    fullWidth
                    label="Customer Email"
                    variant="outlined"
                    type="email"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    fullWidth
                    label="Customer Phone"
                    variant="outlined"
                    type="tel"
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    fullWidth
                    label="Booking Date"
                    variant="outlined"
                    type="date"
                    value={bookingDate}
                    onChange={(event) => setBookingDate(event.target.value)}
                    sx={{ mb: 2 }}
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Service</InputLabel>
                    <Select
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                        required
                    >
                        <MenuItem value="Haircut">Haircut</MenuItem>
                        <MenuItem value="Massage">Massage</MenuItem>
                        <MenuItem value="Spa">Spa</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Book
                </Button>
            </form>
        </Box>
    );
}

export default BookingForm;
