import React from 'react'
import { useContext } from 'react'
import {Data} from '../Contextprovider'
import Homecources from './Homecources'
import Homeaboutus from './homeaboutus'
import Blogsandregister from './blogs&register'
import Notificationshome from './notifications'
import './home.css'
import mainimg from '../../assets/images/banner.png'

const Home = () => {
  const {fullname} = useContext(Data)
  return (
      <>
          <div>
            <div className='main-image'>
                 <img src={mainimg} alt='home image'/>
            </div>
            <Notificationshome/>
            <Homecources/>
            <Homeaboutus/>
            <Blogsandregister/>
          </div>

      </>
  )
}

export default Home