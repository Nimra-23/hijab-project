import React from 'react'
import untitled from '../../assets/Untitled-design.png'
import hijab1 from '../../assets/hijab-1.jpg'


const LgBanner = () => {
    return (
        <div>
            <div className="grid grid-cols-12 pb-[100px]">
                <div className="lg:col-span-6 h-[160px] col-span-12 relative ">
                    <img src={hijab1} alt="" className=' w-full h-full object-cover object-bottom md:w-full' />
                     <p className=" font-[open-sans] absolute top-1/2 text-center right-[100px] -translate-y-1/2  f text-[25px]">
                     Free Shipping On All Orders Over 4000
                     </p>
                </div>
                <div className="lg:col-span-6 h-[160px] col-span-12 relative" >
                    <img src={untitled} alt="" className='object-center object-cover w-full h-full sm:w-full' />
                    <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-[25px]">
                          Open For Business : Hijab PK
                         </p>
           
                </div>
            </div>
        </div>
    )
}

export default LgBanner