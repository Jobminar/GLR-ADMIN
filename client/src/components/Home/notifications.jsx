import React, { useEffect, useState } from 'react';
import './notifications.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Notificationshome = () => {
  const navigate = useNavigate()
  const [careersData, setCareersData] = useState(null);
  
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get('https://glr-be.onrender.com/getcareer');
        setCareersData(response.data);
      } catch (error) {
        console.log('Error occurred while fetching the careers', error);
      }
    };

    fetchCareers();
  }, []);

  // filtering the data display by week wise 

  const filterNotifications = (notifications) => {
    const currentDate = new Date();
    const filteredNotifications = notifications.filter(notification => {
      const deadlineDate = new Date(notification.applicationDeadline);
      const timeDiff = deadlineDate.getTime() - currentDate.getTime();
      const diffInDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      return diffInDays <= 7; // Change 5 to the number of days within which you want to filter notifications
    });
  
    // Sort the filtered notifications by the difference between their deadline and the current date
    filteredNotifications.sort((a, b) => {
      const deadlineDateA = new Date(a.applicationDeadline);
      const deadlineDateB = new Date(b.applicationDeadline);
      const timeDiffA = Math.abs(deadlineDateA.getTime() - currentDate.getTime());
      const timeDiffB = Math.abs(deadlineDateB.getTime() - currentDate.getTime());
      return timeDiffA - timeDiffB;
    });
  
    return filteredNotifications.slice(0, 3); // Display only the first three filtered notifications
  };
  

  return (
    <>
      <div className='home-notifi-main-con'>
        <div className='home-notifi-sub-con'>
          {careersData ? (
            filterNotifications(careersData).map((notification, index) => (
              <div key={index} className='notification-sub'>
                <p className="date">
                  {new Date(notification.applicationDeadline).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h3>{notification.companyName} is Hiring: {notification.jobTitle} ({notification.experience})</h3>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='viewallcareers'>
          <button onClick={()=>navigate('./Careers')}>View all notifications</button>
        </div>
      </div>
    </>
  );
};

export default Notificationshome;
