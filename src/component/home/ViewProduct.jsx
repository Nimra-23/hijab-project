import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = ({ isopen, handleClose }) => {
  
    return (
        <>
            {isopen && (
                <div className="fixed w-full h-full mx-auto inset-0 z-50 flex items-center justify-center bg-black/60 ">
                    <div className='w-[80%] h-full  '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6'>
                                <img src={view.image} alt="" className='w-full h-full' />
                            </div>
                            <div className='col-span-6 p-4'>
                                <button
                                    onClick={handleClose}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Close
                                </button>
                                <h1>{view.title}</h1>
                                <p>Wrap yourself in the lively hue of Carrot, where modern flair meets the warmth of tradition.Immerse yourself in the plush comfort and chic allure of our Carrot Hijab, meticulously crafted to add a touch of vibrancy to your ensemble.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewProduct