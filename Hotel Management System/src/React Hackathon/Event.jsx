import React, { useState } from 'react';
import { db } from '../Firebase/FirebaseConfig'; // Adjust path as necessary
import { collection, addDoc } from 'firebase/firestore';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventRef = collection(db, 'events'); // 'events' is the name of your Firestore collection
      await addDoc(eventRef, {
        name: eventName,
        date: eventDate,
        description: eventDescription,
      });
      setEventName('');
      setEventDate('');
      setEventDescription('');
      setError('');
      console.log('Event Created Successfully');
    } catch (err) {
      setError('Error creating event: ' + err.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Event Name"
            variant="outlined"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Event Date"
            type="date"
            variant="outlined"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Event Description"
            variant="outlined"
            multiline
            rows={4}
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Create Event
        </Button>
      </form>
    </Container>
  );
};

export default CreateEvent;
