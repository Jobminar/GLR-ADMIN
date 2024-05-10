import React from 'react'
import ratings from '../../assets/images/ratings.png'
import './testomials.css'
import testomial from '../../assets/images/testomial-image.png'
import testomial1 from '../../assets/images/testomial.png'
import testomial2 from '../../assets/images/testomial-1.png'

const Testomials = () => {
  return (
    <>
      <div className='testomial-con'>
          <h1>TESTIMONIAL</h1>
          <p>What Says Our Students</p>
          <div className='testomial-main-con'>
              <div className='testomial-sub-con'>
                    <div className='testomial-image'>
                       <img src={testomial1} alt='image'/> 
                    </div>
                    <div className='testomial-content'>
                        <p className='testomial-head'>Mirza hasnain</p>
                        <p className='testomial-con'>Amazing experience. Truly an eye-opener for several faculty like me who enrolled for the course from my institution.</p>
                    </div>
              </div>
              <div className='testomial-sub-con'>
                    <div className='testomial-image'>
                      <img src={testomial} alt='image'/>  
                    </div>
              </div>
              <div className='testomial-sub-con'>
                   <div className='testomial-image'>
                     <img src={testomial2} alt='image'/>  
                    </div>
              </div>
          </div>
      </div>
        
    </>
  )
}

export default Testomials