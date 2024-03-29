import React, { useContext } from 'react';
import { Data } from '../Contextprovider';
import './courses.css'

const Courses = () => {
  const { coursedata } = useContext(Data);

  return (
    <div>
      <h2 className='course-head'>Course Categories</h2>
      <div className='course-main-con'>
        {coursedata.map(course => (
          <div key={course._id} className='course-sub-con'>
            
                  <div className='course-image'>
                    <img
                        src={`data:image/png;base64, ${course.courseImage}`}
                        alt={`Item ${course.blogName}`}
                      />
                  </div>
                  <div className='courses-content'>
                    <h3>{course.title}</h3>
                    <p>{course.description.substring(0, 80)}</p> {/* Displaying only first 100 characters */}
                    
                 
                  </div>
                  <div className='price-explore'>
                       <p>${course.price}</p>
                       <button>Explore</button>
                  </div>
                 
          
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default Courses;
