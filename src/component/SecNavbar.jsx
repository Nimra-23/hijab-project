import { React, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const SecNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <nav className=" hover:bg-white duration-400 relative z-50 pt-0">
                <div className="mx-auto max-w-[1261px] px-2 sm:px-6 lg:px-8  ">
                    <div className="relative h-[120px] justify-between md:grid-cols-12 flex lg:grid lg:grid-cols-3">
                        {/* only at laptop */}
                        <div className="flex items-center gap-4">

                            <div className="block lg:hidden">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-black focus:outline-none"
                                >
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
                                            <Link to="/About" className="block text-black text-base font-medium">
                                            About</Link>
                                            <Link to="/Contact" className="block text-black text-base font-medium">Contact</Link>
                                        </div>
                                    </div>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        
                            {/* navlinks for laptop screen */}
                            <div className="hidden lg:flex items-center">
                                <div className="flex space-x-6 ml-4">
                                    <Link to="/" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">Home</Link>
                                    <Link to="/shop" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">Shop</Link>
                                    <Link to="/About" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">About</Link>
                                    <Link to="/Contact" className="activeBottom rounded-md px-3 py-2 text-sm font-medium text-black">Contact</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center md:justify-center">
                            <img className="h-[50px] w-auto" src={logo} alt="Your Company" />
                        </div>


                        <div className="flex md:flex-1 justify-end items-center gap-5  pr-2 sm:ml-6 sm:pr-0">
                            <button className="cursor-pointer lg:flex hidden">
                                <i className="fa-solid fa-user text-black"></i>
                            </button>
                            <button className="cursor-pointer lg:flex hidden">
                                <i className="fa-solid fa-search text-black"></i>
                            </button>
                            <div className="lg:flex items-center gap-2   hidden">
                                <button className="cursor-pointer">
                                    <i className="fa-solid fa-heart text-black"></i>
                                </button>
                                <button className="cursor-pointer bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="cursor-pointer">
                                    <i className="fa-solid fa-bucket text-black"></i>
                                </button>
                                <button className="cursor-pointer bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default SecNavbar