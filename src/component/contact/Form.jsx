import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <>
            <div className='lg:h-[450px] h-auto lg:overflow-y-scroll lg:px-[50px] px-[20px]'>
                <h1 className='text-[40px]  font-[500] pt-[30px] '>Contact Me</h1>
                <ul className='py-[30px] space-y-3'>
                    <li className='flex'>
                        <p className='text-[13px] font-[600]'>ADDRESS</p>
                        <p className='text-gray-500 pl-[35px] hover:text-black duration-300 text-[13px]'>2nd Floor Shafique Center Mumtaz Market , Gujranwala, Pakistan</p>
                    </li>
                    <li className='flex'>
                        <p className='text-[13px] font-[600]'>PHONE</p>
                        <Link to="/" className='pl-[45px] text-gray-500 hover:text-black duration-300 text-[13px]'> 0327 6655557</Link>
                    </li>
                    <li className='flex ' style={{ flex: "0 0 110px", boxSizing: "borderBox" }}>
                        <p className='text-[13px] font-[600]'>EMAIL
                        </p>
                        <p className='text-gray-500 hover:text-black duration-300  pl-[50px] text-[13px]'>
                            sales@hijabpk.com</p>
                    </li>
                </ul>
                <div className='flex  pt-2 justify-evenly sm:justify-evenly md:justify-start lg:justify-start gap-0 sm:gap-0 md:gap-3 lg:gap-3 '>
                    <a href=""><i className="fa-brands fa-facebook hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                    <a href=""><i className="fa-brands fa-instagram  hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                    <a href=""><i className="fa-brands fa-tiktok hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                    <a href=""><i className="fa-brands fa-square-whatsapp hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                </div>
                <h1 className='text-[28px] py-[40px]'>Get In Touch</h1>
                <form className="space-y-6 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="">
                        <label className="text-sm text-gray-600 mb-1 flex flex-col">Name
                        <input
                            type="text"
                            className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2"
                           
                        /></label>
                        
                    </div>
                    <div className="">
                        <label className="text-sm text-gray-600 mb-1 flex flex-col">Email
                        <input
                            type="email"
                            className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2"
                        />
                        </label>
                    </div>
                </div>

                
                <div className="">
                    <label className="text-[16px] text-gray-600 mb-1 flex flex-col">Subject
                    <input
                        type="text"
                        className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2"
                    />
                    </label>
                </div>

                
                <div className="">
                    <label className="text-[16px] text-gray-600 mb-1 flex flex-col">Message
                    <textarea
                        rows="4"
                        className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2 resize-none"
                        
                    ></textarea>
                    </label>
                </div>

                
                <button
                    type="submit"
                    className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-black transition"
                >
                    Send Message
                </button>
            </form>
            </div>
        </>
    )
}

export default Form