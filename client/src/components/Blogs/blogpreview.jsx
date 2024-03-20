import React from 'react'
import { useLocation } from 'react-router-dom'
import './blogpreview.css'
import WestIcon from '@mui/icons-material/West';

const Blogpreview = () => {

    const location = useLocation();
    const selectedblogdata = location.state ? location.state.selectedblog : null;
    // const descPoints = selectedblogdata.desc.split('\n');
    // const blogkeywords = selectedblogdata.keywords
    // console.log(blogkeywords)

    // const searchOnGoogle = (query) => {
    //   window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    // };
  return (
   <>
     <div className='blogpreview-con'>
        <div className='title-back'>
        <h1>{selectedblogdata.blogName}</h1>
        <div>{selectedblogdata.uploadDate}</div>
        </div>
        
         <div className='blogimage'>
             <img src={`data:image/jpeg;base64,${selectedblogdata.blogImage}`} alt={selectedblogdata.blogName} onClick={() => handleProduct(blog)} />
         </div>
         <div>
            <p>{selectedblogdata.blogDescription}</p>
         </div>
         
        
     </div>
   </>
  )
}

export default Blogpreview