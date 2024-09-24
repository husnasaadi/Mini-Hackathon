import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const RoomDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, 'students');
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#f9f9f9' 
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center"
        sx={{ 
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#333' 
        }}
      >
        Student List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '1000px', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}> Room ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Room Number</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Room Type</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {students.length ? (
              students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell sx={{ color: '#333' }}>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.field}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ padding: '20px' }}>
                  <Typography variant="body1" color="textSecondary">
                    No students found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RoomDetails;