import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Viewpage = () => {
  useEffect(() => {
    getfun();
  }, [])
  const usepram = useParams();

  const [view, setView] = useState({});

  const getfun = async () => {
    const api = `http://localhost:3000/comments/${usepram.id}`
    let response = await fetch(api);
    response = await response.json();
    setView(response);
    console.log(response)
  }
  return (
    <div className='mx-[20px]'>
      <div className='flex justify-between items-center py-5 mx-2'>
        <h1 className='text-[25px]'>Viewpage : {usepram.id}</h1>
        <Link to="/admin" className='bg-blue-800 text-white text-[15px] px-5 py-3 font-bold rounded-3xl'>Back Home</Link >
      </div>
      <div className='grid-cols-12 grid pt-[50px] '>
        <div className='col-span-4'>
          <img src={view.image} alt="" />
        </div>
        <div className='col-span-8 pr-[30px] '>
          <h1 className='pb-3 text-[40px] text-blue-900 font-bold  '>{view.title}</h1>
          <p className='text-[15px] text-blue-950 pb-3'>Price: {view.price}</p>
          <p className='text-[16px]'>{view.description}</p>
        </div>
      </div>
    </div >
  )
}
export default Viewpage