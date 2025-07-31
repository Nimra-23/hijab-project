import React from 'react'
import Form from '../../component/contact/Form'
import BannerImg from '../../component/contact/BannerImg'

const Contact = () => {
    return (
        <>
                <div className='grid grid-cols-12 lg:h-[700px] h-auto'>
                    <div className="lg:col-span-6 col-span-12   lg:py-[50px] py-[opx] order-2 lg:order-1">
                        <Form />
                    </div>
                    <div className='lg:col-span-6 col-span-12  lg:h-[700px] h-[400px]  -translate-y-[120px] order md:order-1'>
                        <BannerImg />
                    </div>
                </div>
        </>
    )
}
export default Contact