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
        <div className='home-cources-con-sub'>
             <div className='home-cources-con-sub-child'> 
                    <div>
                      <div className='course-tittle'>
                         <p>DATA SCIENCE</p>
                      </div>
                           
                    </div>
                    <div className='price-explore'>
                           19999
                    </div>
             </div>
             <div className='home-cources-con-sub-child'> 

            </div>
            <div className='home-cources-con-sub-child'> 

            </div>
            <div className='home-cources-con-sub-child'> 

            </div>
            <div className='home-cources-con-sub-child'> 

            </div>
            <div className='home-cources-con-sub-child'> 

            </div>
        </div>
    </div>
      

    </>
  )
}

export default Homecources