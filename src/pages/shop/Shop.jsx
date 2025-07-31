import React from 'react'
import Side from '../../component/shop/Side'
import ContentCard from '../../component/shop/ContentCard'
import { useLocation } from 'react-router-dom'
import Navbar from '../../component/Navbar'


const Shop = () => {
    const location = useLocation();
    let heading = 'Shop';
    if (location.pathname.includes('CashmereWool')) {
        heading = " Cashmere Wool"
    }
    else if (location.pathname.includes('Chiffongeo')) {
        heading = " Chiffon Georgette Hijabre Wool";
    }
    else if (location.pathname.includes('HotSales')) {
        heading = "HotSales";
    }
    return (
        <div>
            <Navbar/>
            <h1 className='lg:text-[60px]  text-[30px] text-center py-[30px]'>{heading} </h1>
            <div className="grid grid-cols-12  max-w-[1170px] lg:mx-auto mx-[30px]">
                <div className="lg:col-span-3 col-span-12 order-2 lg:order-1">
                    <Side />
                </div>
                <div className="lg:col-span-9 px-5 col-span-12 order-1 lg:order-2">
                    <ContentCard />
                </div>
            </div>
        </div>
    )
}
export default Shop