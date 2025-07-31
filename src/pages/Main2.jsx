import React from 'react'
import SecNavbar from '../component/SecNavbar'
import { Outlet } from 'react-router-dom'
import Footer2 from '../component/Footer2'

const Main2 = () => {
  return (
    <div>
        <SecNavbar/>
        <Outlet/>
        <Footer2/>
    </div>
  )
}

export default Main2