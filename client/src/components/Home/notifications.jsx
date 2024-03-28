import React from 'react';
import './notifications.css';
import Notifications from './notification';

const Notificationshome = () => {
  // Slice the Notifications array to include only the first three items
  const firstThreeNotifications = Notifications.slice(0, 3);

  return (
    <>
      <div className='home-notifi-main-con'>
        <div className='home-notifi-sub-con'>
          {firstThreeNotifications.map((notification, index) => {
            return (
              <div key={index} className='notification-sub'>
                <p className='date'>{notification.date}</p>
                <p>{notification.notification}</p>
              </div>
            );
          })}
        </div>
        <div className='viewallcareers'>
        <button>View all notifications</button>
        </div>
       
      </div>
    </>
  );
};

export default Notificationshome;
