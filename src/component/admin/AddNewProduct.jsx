import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Againadd = () => {
   const[title,setTitle]=useState("");
   const[image,setImage]=useState("");
   const[price,setPrice]=useState("");
   const[discription,setDiscription]=useState("");
//    to redirect my page on the admin page so ---
//    here i was using the use navigation to redirect it=----
    const  linkpage =useNavigate();

   
     
   const AddedProduct=async()=>{
    const api="http://localhost:3000/comments";
    let response=await fetch(api ,{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
        title:title,
        image:image,
        price:price,
        description:discription
        })
    })
    const data= await response.json()
    if(data){
        alert("Product Added");
        linkpage("/admin")
    }
   }



    return (
        <div>
            <div className='flex justify-between items-center py-5 mx-2' >
                <h2 className='text-3xl font-bold'>Add Product Right here</h2>
                <Link to="/admin" className='bg-blue-800 text-white text-[15px] px-5 py-3 font-bold rounded-3xl'>Back</Link >
            </div>
            <div className='w-[600px] rounded-2xl  shadow-2xl p-5 my-[50px] mx-auto'>
                <div className='flex mb-3'>

                    <label htmlFor="title" className='font-bold '>Enter Title</label>
                    <input
                        
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Enter your Title"
                        type="text"
                        id='title'
                       onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>

                <div className='flex mb-3'>
                    <label htmlFor="url" className='font-bold '>Image</label>
                    <input
                        type="text"
                        id='url'
                       onChange={(e)=>setImage(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        
                    />
                </div>

                <div className='flex mb-3'>
                    <label htmlFor="price" className='font-bold '>Price</label>
                    <input
                        type="text"
                        id='price'
                         onChange={(e)=>setPrice(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

                    />
                </div>
                <label htmlFor="description" className='font-bold'>Description</label>
                <textarea
                    id='description'
                    className='row-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                     onChange={(e)=>setDiscription(e.target.value)}
                   
                />
                <div className='justify-center items-center flex mt-4'>
                    <button
                        className='cursor-pointer bg-amber-400 text-[15px] px-[30px] font-bold py-2 rounded-2xl'
                        onClick={AddedProduct}
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Againadd