import React from 'react'
import './aboutus.css'
import aboutimg from '../../assets/images/aboutus-img.png'

const Aboutus = () => {
  return (
    <>
           <div className='aboutus-con'>
                <div className='aboutus-img'>
                     <img src={aboutimg} alt='About us'/>
                     <p className='relative-aboutus'>About us</p>
                </div>
                <div className='aboutus-content'>
                  <div className='aboutus-main-content'>
                     <h1>MEET OUR AUTHOR</h1>
                     <h3>Shivaramakrishna M</h3>
                     <h4>Cloud Engineer</h4>
                     <p>Feel free to customize and expand upon this blog to provide more insights, case studies, and personal anecdotes about the nuances of government jobs and private jobs in India. Let's empower individuals to make informed decisions about their career paths and aspirations.</p>
                  </div>
                    
                  <div className='founder-img'>
                     <img src='' alt='founder image'/>
                  </div>
                </div>
           </div>
    </>
  )
}

export default Aboutus