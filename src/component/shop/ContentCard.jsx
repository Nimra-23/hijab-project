import React from 'react'
import img from '../../assets/images.png'
import { Link, Outlet } from 'react-router-dom'


const ContentCard = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className="flex lg:space-x-4  space-x-0">
          <Link to="" className="activeBottom rounded-md px-3 py-2 lg:text-[18px] text-[13px]  font-medium text-[#78787a] duration-500 hover:text-black" aria-current="page">All Products</Link>
          <Link to="Chiffongeo" className="activeBottom rounded-md px-3 py-2 lg:text-[18px] text-[13px]  font-medium text-[#78787a] duration-500 hover:text-black">Chiffon Georgette Hijab</Link>
          <Link to="CashmereWool" className="activeBottom rounded-md px-3 py-2 lg:text-[18px] text-[13px]  font-medium text-[#78787a] duration-500 hover:text-black">Cashmere Wool</Link>
        </div>
        <div className="flex space-x-2 ">
          <div className='lg:flex space-x-2 hidden'>
            <a href="/" className="activeBottom rounded-md px-3 py-2 text-[18px]font-medium text-[#78787a] duration-500 hover:text-black" aria-current="page">2</a>
          <a href="/shop" className="activeBottom rounded-md px-3 py-2 text-[18px] font-medium text-[#78787a] duration-500 hover:text-black">3</a>
          <a href="#" className="activeBottom rounded-md px-3 py-2 text-[18px] font-medium text-[#78787a] duration-500 hover:text-black">4</a>
          <a href="#" className="activeBottom rounded-md px-3 py-2 text-[18px] font-medium text-[#78787a] duration-500 hover:text-black">5</a>
          <span className=' text-[#78787a] py-2'>|</span>
          </div>
          <h3 className='py-2'>Filter By</h3>
          <img src={img} alt="" className='w-[35px] h-[35px]' />
        </div>
        
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default ContentCard