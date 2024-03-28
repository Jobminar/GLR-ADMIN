

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './blogs.css'
import CircularProgress from '@mui/material/CircularProgress'; 
import { Data } from '../Contextprovider';

const Blogs = () => {
  const {fullname,blogsData} = useContext(Data)
  const navigate = useNavigate();
 console.log(blogsData,'blog data in blog page')

 
  if (!blogsData || blogsData.length === 0) {
    return <CircularProgress/>
  }

  return (
    <>
      <div className="blogs-con">
        <div className='blog-main-con'>
          {blogsData.map((item,index)=>{
            return(
              <div key={index} className='blogs-sub-con'>
                  <div className='blog-image'>
                    <img
                        src={`data:image/png;base64, ${item.blogImage}`}
                        alt={`Item ${item.blogName}`}
                      />
                  </div>
                  <div className='blog-content'>
                      <h2>{item.blogName}</h2>
                      <p>{item.blogDescription}</p>
                      <p>{item.uploadDate}</p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;