import React from 'react'
import Coursedata from './course'
import './homecourses.css'
// import { Data } from '../Contextprovider';
// import { useContext } from 'react';
import development from '../../assets/images/dev.png'
import marketing from '../../assets/images/marketing.png'
import web from '../../assets/images/web.png'
import business from '../../assets/images/business.png'

const Homecources = () => {
  // const { coursedata } = useContext(Data);
  return (
    <>
    <div className='home-courses-con'>
    <div className='course-head-navigation'>
             <h1>Fast track your progress<br/> with our course guide.</h1>
             <button>View all courses</button>
    </div>
       <div className='course-s-con'>
          <div className='course-s-sub-con'>
            <div>
            <img src={development} alt='course-main'/>
            </div>
              <p>Development</p>
          </div>
          <div className='course-s-sub-con'>
            <div>
            <img src={web} alt='course-main'/>
            </div>
            <p>Web Development</p>
          </div>
          <div className='course-s-sub-con'>
            <div>
            <img src={business} alt='course-main'/>
            </div>
             <p>Business</p>
          </div>
          <div className='course-s-sub-con'>
            <div>
            <img src={marketing} alt='course-main'/>
            </div>
            <p>Marketing</p>
          </div>
       </div>
    </div>
      

    </>
  )
}

export default Homecources