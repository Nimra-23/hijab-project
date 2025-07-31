import React from 'react'
import { Link } from 'react-router-dom'
const Side = () => {
    return (
        <div className='sticky top-5  lg:mx-0 sm:mx-[10px]'>
            <h1 className='text-[18px] '>Filter By</h1>
            <div className='pb-[200px] '>
                <div className="flex flex-col space-y-3 pr-[20px] ">
                    <Link to="" className="w-fit px-3 py-5 text-[12px] font-[18px] text-black" aria-current="page">
                        CATEGORIES
                    </Link>
                    <Link to="CashmereWool" className="w-fit  duration-500 hover:text-black   px-3 text-[13px] font-medium text-[#78787a]">
                        cashmere-wool
                    </Link>
                    <Link to="Chiffongeo" className="w-fit  px-3 text-[13px] font-medium text-[#78787a] duration-500 hover:text-black">
                        chiffon-georgette-hijab
                    </Link>
                    <div className=" border-b border-gray-300 pb-4 px-3"> {/* Optional separator */}
                        {/* You can put something here or just keep as a visual separator */}
                    </div>
                    <Link to="" className="w-fit px-3 pt-3 pb-4 text-[12px] font-[20px] text-black" aria-current="page">
                        SORT 
                    </Link>
                    <Link to="./" className="w-fit  duration-500 hover:text-black  px-3 text-[13px] font-medium text-[#78787a]">
                        All Product
                    </Link>
                    <Link to="Chiffongeo" className="w-fit   px-3 text-[13px] font-medium text-[#78787a] duration-500 hover:text-black">
                        Best Seller
                    </Link>
                     <Link to="HOtSales" className="w-fit   px-3 text-[13px] font-medium text-[#78787a] duration-500 hover:text-black">
                        New Products
                    </Link>
                     <Link to="HotSales" className="w-fit   px-3 text-[13px] font-medium text-[#78787a] duration-500 hover:text-black">
                        Hot Product
                    </Link>
                     <div className=" border-b border-gray-300 pb-4 px-3"> {/* Optional separator */}
                        {/* You can put something here or just keep as a visual separator */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Side