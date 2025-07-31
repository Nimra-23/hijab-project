import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';



const Edit = () => {
   const usenavi=useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [discription, setDiscription] = useState("");
    const useParam = useParams();
   

   useEffect(()=>{
    getproduct()
   },[])


   const getproduct=async()=>{
     const api="http://localhost:3000/comments/"+ useParam.id;
     let response=await fetch(api);
     response=await response.json()
     setTitle(response.title);
     setImage(response.image);
     setPrice(response.price);
     setDiscription(response.description);
   }


    const getupdate = async() => {
        const api = "http://localhost:3000/comments/"+useParam.id;
        let response = await  fetch(api, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
           body:JSON.stringify({
           title:title,
           image:image,
           price:price,
           discription:discription
        }) 
      })
      const data=await response.json();

      if(data){
        alert("Your Data is updated")
        usenavi("/admin")
      }
    } 


return (
    <div>
        <div className='flex justify-between items-center py-5 mx-2' >
            <h2 className='text-3xl font-bold'>Edit Product {useParams.id}</h2>
            <Link to="/admin" className='bg-blue-800 text-white text-[15px] px-5 py-3 font-bold rounded-3xl'>Back</Link >
        </div>

        <div className='w-[600px] rounded-2xl  shadow-2xl p-5 my-[50px] mx-auto'>
            <div className='flex mb-3'>

                <label htmlFor="title" className='font-bold '>Enter Title</label>
                <input
                    value={title}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder="Enter your Title"
                    type="text"
                    id='title'
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='flex mb-3'>
                <label htmlFor="url" className='font-bold '>Image</label>
                <input
                value={image}
                    type="text"
                    id='url'
                    onChange={(e) => setImage(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

                />
            </div>

            <div className='flex mb-3'>
                <label htmlFor="price" className='font-bold '>Price</label>
                <input
                value={price}
                    type="text"
                    id='price'
                    onChange={(e) => setPrice(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

                />
            </div>
            <label htmlFor="description" className='font-bold'>Description</label>
            <textarea
              value={discription}
                id='description'
                className='row-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setDiscription(e.target.value)}

            />
            <div className='justify-center items-center flex mt-4'>
                <button
                    className='cursor-pointer bg-amber-400 text-[15px] px-[30px] font-bold py-2 rounded-2xl'
                    onClick={getupdate}
                >
                    Edit
                </button>
            </div>
        </div>
    </div>
)
}
export default Edit