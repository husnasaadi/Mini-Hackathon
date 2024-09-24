import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRoom from '../assets/Images/SingleRoom.jpg'; 
import DoubleRoom from '../assets/Images/DoubleRoom.webp'; 
import TripleRoom from '../assets/Images/TripleRoom.webp'; 
import ConnectingRoom from '../assets/Images/Connecting-Room.webp'; 
import QuadRoom from '../assets/Images/QuadRoom.jpg'; 
import KingRoom from '../assets/Images/KingRoom.jpg'; 
import QueenRoom from '../assets/Images/QueenRoom.jpg'; 

const Room = () => {
  const rooms = [
    { id: 1, description: 'Single Room', price: '$100', image: SingleRoom },
    { id: 2, description: 'Double Room', price: '$150', image: DoubleRoom },
    { id: 3, description: 'Triple Room', price: '$80', image: TripleRoom },
    { id: 4, description: 'Connecting Room', price: '$90', image: ConnectingRoom },
    { id: 5, description: 'Quad Room', price: '$120', image: QuadRoom },
    { id: 6, description: 'King Room', price: '$180', image: KingRoom },
    { id: 7, description: 'Queen Room', price: '$160', image: QueenRoom },
    { id: 4, description: 'Connecting Room', price: '$90', image: ConnectingRoom },

  ];

  return (
    <div className="container">
      <Typography variant="h4" className="my-4" align="center">
        Room Services
      </Typography>
      <Grid container spacing={3}>
        {rooms.map((room, index) => (
          <Grid
            item
            xs={12}         // Full width on extra small screens (phones)
            sm={6}          // 2 items per row on small screens (tablets)
            md={4}          // 3 items per row on medium screens (desktops)
            lg={3}          // 4 items per row on large screens (larger desktops)
            key={room.id}
            style={{
              display: 'flex',
              justifyContent: rooms.length % 3 !== 0 && index === rooms.length - 1 ? 'center' : 'flex-start',
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={room.image}
                alt={room.description}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" color="black" gutterBottom>
                  {room.description}
                </Typography>
                <Typography variant="body1" color="red">
                  {room.price}
                </Typography>
                <Link to='/roombooking' style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{background:'black',color:'white'}} style={{ marginTop: '10px' }}>
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Room;
