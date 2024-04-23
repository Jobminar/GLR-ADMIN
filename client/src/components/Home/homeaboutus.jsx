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
                 <p>Fermentum odio eu feugiat pretium nibh. adipisicing elit. Deserunt esse natus corporis distinctio, eaque provident officiis quaerat animi atque commodi magnam dolores quo iste. Quis enim lobortis scelerisque fermentum vehicula in. Pellentesque condimentum ntum vehicula.Nulla convallis enim eu velit commodo condimentum.</p>
                 <p className='readmore'>Read more</p>
            </div>
      </div>
   </>
  )
}

export default Homeaboutus