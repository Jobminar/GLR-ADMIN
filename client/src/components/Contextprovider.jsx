import React from 'react'
import { createContext } from 'react'

export const Data =createContext()

const fullname = 'Anil'
const price = 'price'
const value ='20'

const Contextprovider = ({children}) => {
  return (
    <>
       <Data.Provider value={{fullname,price,value}}>
              {children}
       </Data.Provider>
    </>
  )
}

export default Contextprovider