import React from 'react'
import AboutIMG from '../../assets/AboutIMG.jpg'


const BannerSection = () => {
    return (
        <>
            <div className='grid grid-cols-12  mx-auto'>
                <div className="lg:col-span-6 col-span-12 lg:h-[700px] h-[400px] -translate-y-[120px] ">
                    <img src={AboutIMG} alt="" className=' w-full h-full object-cover object-center' />
                </div>
                <div className="lg:col-span-6 col-span-12  lg:p-[100px] px-[30px] pb-[50px]">
                    <div className="h-[400px] overflow-y-scroll">
                        <h1 className='text-[40px]   font-bold'>Hello I'm Aisha</h1>
                        <p className='text-[14px] text-gray-500'>I'm a Fashion Designer From Punjab Pakistan.</p>
                        <p className='text-[16px] py-[50px]'>Discover modest elegance at HijabPK, where tradition meets contemporary style. Elevate your fashion with curated hijabs for a refined, confident look.</p>
                        <p className='text-[14px] text-gray-800 pb-[50px]'>Welcome to HijabPK, your destination for modest elegance and contemporary hijab fashion. At HijabPK, we celebrate the timeless beauty of modesty, offering a carefully curated collection of hijabs that seamlessly blend tradition with modern style. Our passion lies in providing a diverse range of high-quality hijabs that cater to the unique tastes and preferences of our community. Each piece is thoughtfully chosen to inspire confidence, empower individuality, and redefine the narrative of modest fashion. Whether you’re drawn to vibrant prints, classic neutrals, or cozy winter essentials, HijabPK is your trusted source for hijabs that not only adorn but also resonate with the essence of your identity. Join us on a journey where modesty meets fashion, and let HijabPK be your guide to expressing your faith with grace and style.</p>
                        <div className='p-[10px] '>
                            <h2 className='font-semibold text-[15px] text-gray-900'>Follow Us</h2>
                            <div className='flex  pt-2 justify-evenly sm:justify-evenly md:justify-start lg:justify-start gap-0 sm:gap-0 md:gap-3 lg:gap-3 '>
                                <a href=""><i className="fa-brands fa-facebook hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                                <a href=""><i className="fa-brands fa-instagram  hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                                <a href=""><i className="fa-brands fa-tiktok hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                                <a href=""><i className="fa-brands fa-square-whatsapp hover:scale-125 transition-transform duration-300 text-[#000000] text-[16px]" ></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerSection