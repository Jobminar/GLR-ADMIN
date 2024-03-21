// import React, { useContext } from 'react';
// import { Data } from '../Contextprovider';
// Import CircularProgress from MUI

// const Blogs = () => {
//   const blogsdata = useContext(Data); // No need for destructuring here

//   console.log(blogsdata, 'lkjhgfdfhjkjf');

 

//   if (!blogsdata || blogsdata.length === 0) {
//     return <CircularProgress />;
//   }

//   return (
//     <div>
//       {blogsdata.map((ele, ind) => {
//         return (
//           <div key={ind}>
//             <li>{ele.blogName}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Blogs;

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
    <p>{fullname}</p>
      <div className="blogs-con">
        
        <div className="side-head-blogs">
          <h1>BLOGS</h1>
        </div>
        <p>Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!</p>
        <div>
          {blogsData.map((item,index)=>{
            return(
              <div key={index}>
                  <p>{item.blogName}</p>
                  <p>{item.blogDescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;