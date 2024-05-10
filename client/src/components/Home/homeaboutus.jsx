import React from 'react'
import abotus from '../../assets/images/home-aboutus-image.png'
import './homeaboutus.css'

const Homeaboutus = () => {
  return (
   <>
      <div className='home-abouts-con'>
            <div className='image-about-home'>
                 <img src={abotus} alt='about image'/>
            </div>
            <div className='content-about-home'>
                 <h3>GLR EDTECH</h3>
                 <h2>We provide best online<br/> courses and upgrade your skills.</h2>
                 <p>Feel free to customize and expand upon this blog to provide more insights, case studies, and personal anecdotes about the nuances of government jobs and private jobs in India. Let's empower individuals to make informed decisions about their career paths and aspirations.</p>
                 <p className='readmore'>Read more</p>
            </div>
      </div>
   </>
  )
}

export default Homeaboutus