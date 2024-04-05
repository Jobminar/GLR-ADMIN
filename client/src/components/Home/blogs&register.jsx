import React from 'react'
import './blogs&register.css'
import blogimg from '../../assets/images/home-blog-img.png'
import registerimg from '../../assets/images/register-home-img.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const Blogsandregister = () => {
        const navigate = useNavigate()
  return (
       <>
          <div className='blogsandregister'>
                <div className='home-blogs'>
                        <img src={blogimg} alt='home-blog-image'/>
                        <div className='blog-content'>
                        <p>Orientation Program For The New Students</p>    
                        <button onClick={()=>{navigate('./Blogs')}}>View Blog<ArrowRightAltIcon style={{ width: '50px' }}/></button>                 
                        </div>
                </div>
                <div className='register-blogs'>
                        <img src={registerimg} alt='home-register-image'/>
                         <div className='register-content'>
                             <p>Fast Track Your Progress With Our Course Guide.</p>  
                             <button onClick={()=>{navigate('./Courses')}}>Sign In <ArrowRightAltIcon style={{ width: '50px' }}/></button> 
                        </div>
                </div>
          </div>
       </>
  )
}

export default Blogsandregister