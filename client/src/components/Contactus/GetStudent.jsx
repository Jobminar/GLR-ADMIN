import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GetStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        if (!token) {
          throw new Error('User not authenticated');
        }
        const response = await axios.get('http://localhost:4000/students', {
          headers: {
            Authorization: `Bearer ${token}` // Include token in the request header
          }
        });
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - Age: {student.age}, Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetStudent;
