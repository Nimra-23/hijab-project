import { React, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = ({ counter }) => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div>
            <nav className="bg-white relative z-50">
                <div className="mx-auto max-w-[1261px] px-2 sm:px-6 lg:px-8  ">
                    <div className="relative flex h-[120px] items-center justify-between">
                        <div className="flex flex-1  items-center gap-4 flex-row-reverse md:flex-row">

                            <button className="cursor-pointer lg:flex hidden">
                                <i className="fa-solid fa-bars text-black"></i>
                            </button>

                            {/* ===========Mobile & Tablet Menu that is slide from left ==========*/}
                            <div className={`fixed top-0 left-0 h-full w-[250px] justify-self-start  bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                                <div className="flex justify-end p-4">
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="text-gray-500 hover:text-black"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-6 space-y-4">
                                    <Link to="/" className="block text-black text-base font-medium">Home</Link>
                                    <Link to="/Shop" className="block text-black text-base font-medium">Shop</Link>
                                    <Link to="/About" className="block text-black text-base font-medium">About</Link>
                                    <Link to="/Contact" className="block text-black text-base font-medium">Contact</Link>
                                </div>
                            </div>

                            <img className="h-[50px] w-auto lg:flex justify-self-center    md:items-center flex justify-center " src={logo} alt="Your Company" />

                            {/* Toggle button for laptop and smaller screens */}
                            <div className="block lg:hidden">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                                    aria-controls="mobile-menu"
                                    aria-expanded={menuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Center Navigation Links (for large screens only) */}
                        <div className="hidden lg:flex  justify-start">
                            <div className="flex space-x-6">
                                <Link to="/" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black" aria-current="page">Home</Link>
                                <Link to="/shop" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">Shop</Link>
                                <Link to="/About" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">About</Link>
                                <Link to="/Contact" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">Contact</Link>
                            </div>
                        </div>
                        {/* Right  Icons ========================*/}

                        <div className="flex md:flex-1 justify-end items-center gap-5 pr-2 sm:ml-6 sm:pr-0">

                            <button
                                onClick={() => setMenuOpen(true)}
                                className="text-black cursor-pointer flex signup"
                            >
                                <i className="fa-solid fa-user text-black"></i>
                            </button>
                            {menuOpen && (
                                <div className={`fixed top-0 right-0 h-full w-[500px] justify-self-start p-[40px]  bg-white shadow-lg z-40 transform transition-transform duration-900  ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} `}>
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className='text-[15px] font-[600] '>Sign IN</h3>
                                        <button onClick={() => setMenuOpen(false)} className="text-black flex items-center">
                                            <span className='text-[15px] font-[600] mr-[10px]'>close</span>    <i className="fa-solid fa-xmark text-[15px]"></i>
                                        </button>
                                    </div>
                                    <div className="px-[50px] pt-[60px] space-y-5">
                                        <label className="text-sm text-gray-600  flex flex-col">Name
                                            <input
                                                type="text"
                                                className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2"
                                            /></label>

                                        <label className="text-sm text-gray-600 mb-1 flex flex-col">Email
                                            <input
                                                type="email"
                                                className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-1 py-2"
                                            />
                                        </label>
                                        <label className='flex gap-2 mt-[30px]'>
                                            <input type="checkbox" />
                                            <span className='text-[15px]'>Remeber Me</span>
                                        </label>
                                        <button
                                            type="submit"
                                            className=" text-center  w-full mt-6 bg-black text-white  py-4 hover:bg-black transition focus:black"
                                        >
                                            Send Message
                                        </button>
                                        <button
                                            type="submit"
                                            className=" text-center border-1 w-full    py-4 hover:bg-black hover:text-white transition"
                                        >
                                            Create an Account
                                        </button>
                                        <div className='justify-center flex items-center'>
                                            <Link className='text-[15px] border-b-2   fit-content font-[700]'>Lost your password?</Link>
                                        </div>
                                    </div>
                                </div>
                            )}


                            <button className="cursor-pointer lg:flex hidden">
                                <i className="fa-solid fa-search text-black"></i>
                            </button>
                            <div className="lg:flex items-center gap-2   hidden">
                                <button className="cursor-pointer">
                                    <i
                                        className={`fa-solid fa-heart  ${counter > 0 ? 'text-red-600' : 'text-black'
                                            }`}
                                    ></i>
                                </button>

                                <span className="cursor-pointer bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {counter > 0 ? counter : 0}
                                </span>

                            </div>
                            <div className="flex items-center gap-2">
                                <Link to="/AddtoCart"className="cursor-pointer">
                                    <i className="fa-solid fa-bucket text-black"></i>
                                </Link>
                                <button className="cursor-pointer bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</button>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>

        </div>
    );
}

export default Navbar