import React from 'react'
import banner from '../../assets/HeaderImg.jpg'
import untitled from '../../assets/Untitled-design.png'
import untitled2 from '../../assets/Untitled-design.2.jpg'

const Bgbanner = () => {

  return (
    <>
      <div className='lg:mt-[100px] lg:mb-[100px] relative md:my-[80px] mt-[30px]'>
        <img src={banner} alt="" className=' object-cover object-center  w-full  h-150' />
        <div className='flex-row-reverse absolute top-[50px]  gap-3'>
          <div className='flex gap-2'>
            <div className='border-t-2 border-white w-8 mt-3 text-[6px]'></div>
            <p className='font-bold text-white text-[15px]'> Deal of the week</p>
          </div>
          <h1 className='text-[120px] md:text-[100px] text-white  mt-[40px] items-start font-bold sm:text-[72px]'>Stay Warm</h1>
          <div className=''>
            <p className='font-bold text-white text-[12px]'> <a href="">Shop Now</a></p>
            <div className='border-t-2 border-white w-8  mt-2 hover:w-[80px] duration-600 cursor-pointer'></div>
          </div>
          <div className='lg:flex gap-5 mt-[150px] md:mt-[120px] md:flex hidden'>
            <div className='text-white  text-center '>
              <div className='text-[25px] font-bold'>00</div>
              <div className='text-[18px]'>Days</div>
            </div>
            <div className='text-white  text-center text-[20px]'>
              <div className='text-[25px] font-bold'>00</div>
              <div className='text-[18px]'>Week</div>
            </div>
            <div className='text-white  text-center text-[20px]'>
              <div className='text-[25px] font-bold'>00</div>
              <div className='text-[18px]'>Minutes</div>
            </div>
            <div className='text-white text-center text-[20px]'>
              <div className='text-[25px] font-bold'>00</div>
              <div className='text-[18px]'>Seconds</div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">

          {/* Left Image */}
          <div className="col-span-12 md:col-span-6">
            <div className='relative overflow-hidden'>
              <img src={untitled2} alt="" className=' object-cover object-center h-auto w-full  transition-transform duration-1000 hover:scale-110' />
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="border-t-2 border-white w-5 mt-2"></div>
                  <p className="text-white text-sm font-bold"><a href="#">Hijab</a></p>
                </div>

                <h2 className="text-white text-2xl font-bold mb-4">
                  Exclusive Hijab Collections
                </h2>

                <div>
                  <p className="text-white text-sm font-bold"><a href="#">Shop Now</a></p>
                  <div className="border-t-2 border-white w-8 mt-2 hover:w-[80px] transition-all duration-500 cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-6 lg:-translate-y-[200px] md:-translate-y-[100px]  lg:mt-0 md:mt-0 mt-[10px] -translate-y-[0px]">

            {/* Top Right Image */}
            <div className="col-span-12  relative w-[100%] overflow-hidden">
              <img
                src={untitled}
                alt="Hijab"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="border-t-2 border-white w-5 mt-2"></div>
                  <p className="text-white text-sm font-bold"><a href="#">Hijab</a></p>
                </div>
                <h2 className="text-white text-2xl font-bold mb-4">
                  Modesty Redefined: Everyday Comfort Hijab Collection
                </h2>
                <div>
                  <p className="text-white text-sm font-bold"><a href="#">Shop Now</a></p>
                  <div className="border-t-2 border-white w-8 mt-2 hover:w-[80px] transition-all duration-500 cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Empty Space for layout balance */}
            <div className="hidden md:block "></div>

            {/* Newsletter Section */}
            <div className="col-span-12 text-black  lg:p-[50px] p-[20px] border border-black">
              <h2 className="text-[30px]">Join our list</h2>
              <p className="text-gray-800 text-[15px] py-4">
                Signup to be the first to hear about exclusive deals, special offers and upcoming collections
              </p>

              <div className="flex flex-col lg:flex-row gap-3 w-full">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="py-5 pl-4 pr-6 text-[15px] border border-black w-full"
                />
                <button className="py-5 px-6 font-bold text-[15px] bg-black text-white w-full lg:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      
    </>
  )
}
export default Bgbanner

