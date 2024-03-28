import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const Data = createContext();

const ContextProvider = ({ children }) => {
  const [blogsData, setBlogsData] = useState([]);
// blogs get api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://glr-be.onrender.com/getblogs");
        const data = response.data; 
        setBlogsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

// careers get api

  const[careerdata,setcareerdata] = useState([]);

  useEffect(() => {
    const fetchCareer = async () => { // Corrected function name: fetchCareer
      try {
        const response = await axios.get(`https://glr-be.onrender.com/getcareer`);
        const data = response.data;
        setcareerdata(data);
      } catch (error) {
        console.log(error, 'error');
      }
    };
  
    fetchCareer(); // Corrected function call
  }, []); // Empty dependency array to run only once on mount
  
//  courses get api
  const[coursedata,setcoursedata] = useState([]);

    useEffect(() => {
      const fetchCareer = async () => { // Corrected function name: fetchCareer
        try {
          const response = await axios.get(`https://glr-be.onrender.com/getcourse`);
          const data = response.data;
          setcoursedata(data);
        } catch (error) {
          console.log(error, 'error');
        }
      };
    
      fetchCareer(); // Corrected function call
    }, []); // Empty dependency array to run only once on mount


  const fullname = 'anil'

  console.log(blogsData, 'blogs data');
  console.log(careerdata,'careerdata');
  console.log(coursedata,'coursedata');

  return (
    <Data.Provider value={{ blogsData ,fullname , careerdata , coursedata}}>
      {children}
    </Data.Provider>
  );
};

export default ContextProvider;
