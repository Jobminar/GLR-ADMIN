import { TextField } from '@mui/material'
import React, { useState } from 'react'
import swal from 'sweetalert2'
import './contact.css'
const Contactus = () => {

  const [data,setData]=useState({name:"", email:"", phoneNo:"",purpose:""})

  const {name,email,phoneNo,purpose}=data

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("https://glr-be.onrender.com/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      swal.fire({
        icon: "success",
        title: "Success",
        text: "Successfully added the contact data",
      });
      setData({name:"",email:"",phoneNo:"",purpose:""})
    } 
     
    else {
      swal.fire({
        icon: "error",
        title: "Failure to add data",
        text: "Data did not get added",
      });
    }
  };
  return (
    <div className='contact-main'>
      <div><h2>Contact us page</h2></div>
      <div className='conatct-textfield'>
      <TextField id="outlined-basic" label="Name" name='name' value={name}  onChange={handleChange} />
      <TextField id="outlined-basic" label="Email" name='email' value={email} onChange={handleChange}  />
      <TextField id="outlined-basic" label="PhoneNO" name='phoneNo' value={phoneNo} onChange={handleChange}  />
      <TextField id="outlined-basic" label="Purpose" name='purpose' value={purpose} onChange={handleChange}  />
    <button className='contact-button' onClick={submitHandler}>submit details</button>
    </div>
    </div>
  )
}

export default Contactus