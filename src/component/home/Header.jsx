import React, { useState, useEffect } from 'react';
import Headerimg from '../../assets/Headerimg.jpg'
import hijab from '../../assets/hijab.jpg'
import hijab1 from '../../assets/hijab-1.jpg'
import { Link } from 'react-router-dom';
const slides= [
    {
        image:Headerimg,
        title:"ELEGANCE",
        button:"SHOP NOW",
        text:'01 --- New Hijab Collection'
    }
    , 
    {
        image:hijab,
        title:"GRACE",
        button:"SHOP NOW", 
         text:'02 --- New Hijab Collection'

    }
    ,{
        image:hijab1,
        title:"NEW IN",
        button:"SHOP NOW", 
          text:'03 --- New Hijab Collection'

    }
     
];
const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    // from upward come downwaord
    const [down,setDown]=useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIn(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length)
                setSlideIn(true);
            }, 400);
        }, 4000);

        return () => (clearInterval(interval))
    }, [])
    useEffect(()=>{
        setTimeout(() => {
            setDown(true);
        }, 100);
    },[])
    return (
        <>
            <div className="grid  grid-cols-12 ">
                {/* side bar on the left side */}
                <div className="flex-col bg-white gap-10 lg:flex items-center justify-end h-full pb-5 hidden ">

                    <div className="gap-4 flex flex-col ">
                        <a href="/" className='hover:scale-110 transition duration-200'><i class="fa-brands fa-facebook-f" style={{ color: "#000000" }}></i></a>
                        <a href="/" className='hover:scale-110 transition duration-200'><i class="fa-brands fa-instagram" style={{ color: "#000000" }}></i></a>
                        <a href="/" className='hover:scale-110 transition duration-200'><i class="fa-brands fa-whatsapp" style={{ color: "#000000" }}></i></a>
                        <a href="/" className='hover:scale-110 transition duration-200'><i class="fa-brands fa-tiktok" style={{ color: "#000000" }}></i></a>
                    </div>
                    <div className="flex-col items-center flex gap-3 ">
                        <span className='rotate-270 text-[12px]'>SCROLL</span>
                        <span className="text-lg"><i className='fa-long-arrow-down fa-solid'></i></span>
                    </div>
                </div>
                {/* the main header here */}
                <div className="lg:col-span-11 col-span-12" >
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                        <div
                            key={currentIndex}
                            className={`absolute left-0 top-0 h-full w-full bg-cover bg-center transition-all   duration-700  ${slideIn ?
                                'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}
                            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                        >
                           
                            <div className={  `absolute  inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white p-4 text-center  transition-all duration-500 ease-in-out transform${down?' translate-y-10 opacity-100':'translate-y-0 opacity-0'}`} >
                                <h1 className="lg:text-[170px] md:text-[90px] sm:text-[80px] text-[60px] text-white font-bold">
                                    {slides[currentIndex].title}
                                </h1>
                                <Link to="/Shop" className='lg:px-[35px]  md:px-[15px] px-[5px]  lg:w-[200px] md:w-[150px] w-[100px] lg:py-5 md:py-4 py-2 text-black text-[15px] font-bold text-center border-1 bg-white hover:bg-transparent transition duration-300'>
                                {slides[currentIndex].button}
                                </Link>
                                  
                            </div>
                            <p className=  {` text-white  mt-[480px] ml-4 text-semibold  transition-all duration-500 ease-in-out transform${down?' translate-y-15 opacity-100':'translate-y-0 opacity-0'}`}>
                                  <b>{slides[currentIndex].text}</b>   
                            </p>
                              
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header