import React from 'react'
import Coursedata from './course'
import './homecourses.css'
import { Data } from '../Contextprovider';
import { useContext } from 'react';

const Homecources = () => {
  const { coursedata } = useContext(Data);
  return (
    <>
    <div className='home-courses-con'>
    <div className='course-head-navigation'>
             <h1>Fast track your progress<br/> with our course guide.</h1>
             <button>View all courses</button>
        </div>
        <div className='course-main-con'>
        {coursedata.slice(0,4).map(course => (
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
      

    </>
  )
}

export default Homecources