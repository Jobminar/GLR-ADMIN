import React, { useContext } from 'react'
import { Data } from '../Contextprovider'

const Careers =(()=>{
  const {careerdata} = useContext(Data)
  console.log(careerdata,'career data in career page')
    return (
        <>
            {careerdata.map((item,index)=>{
              return(
                <>
                       <p>{item.postName}</p>
                </>
              )
            })}
        </>
      )
    
})

export default Careers