import React from 'react'
import Coursedata from './course'
import './homecourses.css'

const Homecources = () => {
  return (
    <>
    <div className='home-courses-con'>
    <div className='course-head-navigation'>
             <h1>Fast track your progress<br/> with our course guide.</h1>
             <button>View all courses</button>
        </div>
        <div className='home-cources-con'>
             {Coursedata.map((course,index)=>{
                return(
                    <>
                        <div className='course-map-con' key={index}>
                            <div className='course-map-img'>
                                <img src={course.img} alt='courseimage'/>

                            </div>
                            <p>{course.desc}</p>
                        </div>
                    </>
                )
             })}
        </div>
    </div>
      

    </>
  )
}

export default Homecources