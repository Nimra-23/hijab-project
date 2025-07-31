import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='max-w-[1170px] lg:mx-auto md:mx-[20px] mx-[30px] py-[50px]'>
            <div className="grid grid-cols-12   gap-3 pb-[50px]">
                <div className="lg:col-span-4 gap-4 pr-2 space-y-6 md:col-span-6 col-span-12 flex lg:flex-col lg:items-start lg:justify-start  flex-col justify-center items-center ">
                    <img src={logo} alt="" className='h-[50px] w-auto ' />
                    <p className='text-[12px] '>Elevate your style with our chic hijabs – A fusion of modesty and fashion. Discover timeless elegance in every wrap.</p>
                    <p className='text-[13px] '>sales@hijabpk.com</p>
                    <a href="" className='text-[14px]'>0327 6655557</a>
                </div>

                <div className="lg:col-span-2 py-2 md:col-span-6 col-span-12">
                    <div className="flex flex-col space-y-6 lg: mx-[65px]">
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black" aria-current="page">Home</a>
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">Shop</a>
                        <a href="#" className=" text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">About</a>
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">Contact</a>
                    </div>
                </div>
                <div className="lg:col-span-2 py-2 md:col-span-6 col-span-12">

                    <div className="flex flex-col space-y-6  lg:mx-[28px] ">
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black" aria-current="page">Return Policy</a>
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">Order Tracking</a>
                        <a href="#" className=" text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">Terms & Conditions</a>
                        <a href="#" className="text-center activeBottom rounded-md px-3 py-2 text-[12px] font-medium text-black">Privacy Policy</a>
                    </div>
                </div>
                <div className="lg:col-span-4 gap-4 pr-2 space-y-6 pl-4 pt-2 md:col-span-6 col-span-12">
                    <h2 className=' text-[30px]'>Join our list</h2>
                    <p className='text-[12px] '>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
                    <div className='flex justify-between border-b-2 pb-2 border-gray-300 hover:border-black duration-400'>
                        <input type="Email" placeholder='Enter Your Email' className='hover:outline-none cursor-none' />
                        <button><b>Subscribe</b></button>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[15px] text-gray-900'>Follow Us</h2>
                        <div className='flex  pt-2 justify-evenly sm:justify-evenly md:justify-start lg:justify-start gap-0 sm:gap-0 md:gap-3 lg:gap-2 '>
                            <a href=""><i className="fa-brands fa-facebook hover:scale-125 transition-transform duration-300 text-[#000000] text-[20px]" ></i></a>
                            <a href=""><i className="fa-brands fa-instagram  hover:scale-125 transition-transform duration-300 text-[#000000] text-[20px]" ></i></a>
                            <a href=""><i className="fa-brands fa-tiktok hover:scale-125 transition-transform duration-300 text-[#000000] text-[20px]" ></i></a>
                            <a href=""><i className="fa-brands fa-square-whatsapp hover:scale-125 transition-transform duration-300 text-[#000000] text-[20px]" ></i></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-b-1 border-gray-300 '>

            </div>
            <div className="grid grid-cols-12 pt-[50px] items-center">
                <div className="lg:col-span-6 col-span-12 md:col-span-6">

                    <div className="text-[13px] text-center lg:text-start md:text-start">
                        All rights reserved by Hijabpk . Powered by Tecnosphere
                    </div>
                    
                </div>
                <div className="lg:col-span-6  col-span-12 md:col-span-6">
                        <div className=" space-x-8 md:space-x- items-end lg:pl-[220px] text-center lg:text-end md:text-end">
                            <a href="#" className="text-center lg:text-start rounded-md  px-3 py-2 text-[12px] font-medium text-black" aria-current="page">Privacy Policy</a>
                            <a href="#" className="text-center lg:text-start rounded-md px-3 py-2 text-[12px] font-medium text-black">Help</a>
                            <a href="#" className=" text-center lg:text-start rounded-md px-3 py-2 text-[12px] font-medium text-black">FAQ</a>
                            <a href="#" className="text-center lg:text-start rounded-md px-3 py-2 text-[12px] font-medium text-black">Contact</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer