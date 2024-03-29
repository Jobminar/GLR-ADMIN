import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; 
import { Data } from '../Contextprovider';
import './blogs.css'
import { useState } from 'react';

const Blogs = () => {
  const { blogsData } = useContext(Data);
  const navigate = useNavigate();

  if (!blogsData || blogsData.length === 0) {
    return <CircularProgress />;
  }
 
  // blogsending

  const [selectedProduct, setSelectedProduct] = useState('');
  const handleProduct = (item) => {
    setSelectedProduct(item);
    navigate('/blogview', { state: { selectedProduct: item } });
    console.log(item,'data')
  };


  return (
    <div className="blogs-con">
      <div className='blog-main-con'>
        {blogsData.map((item, index) => (
          <div key={index} className='blogs-sub-con' onClick={()=>{handleProduct(item)}}>
            <div className='blog-image'>
              <img
                src={`data:image/png;base64, ${item.image}`}
                alt={`Item ${item.title}`}
              />
            </div>
            <div className='blog-content'>
              <h2>{item.title.substring(0, 40)}</h2>
              <p>{item.description.substring(0, 100)}</p>
              <p>{item.publicationDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
