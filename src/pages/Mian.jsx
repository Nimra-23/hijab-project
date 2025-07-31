import React from 'react'
import Scrollup from '../component/Scrollup'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

const Mian = () => {
    return (
        <div>
          
            <Outlet />
            <Scrollup />
            <div className='border-b-1 border-gray-300 '>
            </div>
            <Footer />
        </div>
    )
}

export default Mian
