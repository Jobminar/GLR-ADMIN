import React from 'react'
import { useContext } from 'react'
import {Data} from '../Contextprovider'
import Homecources from './Homecources'
import Homeaboutus from './homeaboutus'
import Blogsandregister from './blogs&register'
import Notificationshome from './notifications'
import './home.css'

const Home = () => {
  const {fullname} = useContext(Data)
  return (
      <>
          <div>
            <div className='main-image'>
                 
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