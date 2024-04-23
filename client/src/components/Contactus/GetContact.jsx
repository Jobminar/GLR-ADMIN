import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const GetContact = () => {
  const [students, setStudents] = useState([]);
 const navigate=useNavigate()
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        if (!token) {
            // Alert the user to log in when the token is missing
            // alert("Please login to view contacts");
            // navigate("/signin")
            throw new Error('User not authenticated');
          }
        const response = await axios.get('https://glr-be.onrender.com/getcontact', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Contact us</h2>
      <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        {students.map((student) => (
          <Card key={student._id}>
           <p>Name: {student.name}</p>
            <p> message: {student.message}</p>
            <p> phoneNo: {student.phoneNo}</p>
            <p>email:{student.email}</p>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default GetContact;
//
