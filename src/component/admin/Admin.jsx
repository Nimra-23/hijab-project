import React, { useEffect, useState } from 'react'
import { Link, Links, } from 'react-router-dom';

const Admin = () => {
  const [user, setUser] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    products();
    setLoading(true)
  }, [])


  const products = async () => {
    const url = " http://localhost:3000/comments"
    let response = await fetch(url);
    response = await response.json();

    setUser(response); 
    setLoading(false)
  }

  const deletepro=async(id)=>{
   const api=" http://localhost:3000/comments/"+id;
    let response =await fetch(api ,{
    method:"Delete"
    });
    response =await response.json();
    if(response){
      alert("Product Deleted")
      products();
    }
  }
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center py-5'>
        <h2 className='text-3xl font-bold'>OutView</h2>
        <Link to="/addnewproduct" className='bg-blue-800 text-white text-[15px] px-5 py-3 font-bold rounded-3xl'>Add Product</Link >
        <Link to="/Againadd" className='bg-blue-800 text-white text-[15px] px-5 py-3 font-bold rounded-3xl'>Add again</Link >
       </div>


      <table class="min-w-full table-auto border-collapse border border-gray-300 ">
        <thead>
          <tr class="bg-blue-100 text-left">
            <th class="border border-gray-300 px-4 py-2">id</th>
            <th class="border border-gray-300 px-4 py-2">Title</th>
            <th class="border border-gray-300 px-4 py-2">Images</th>
            <th class="border border-gray-300 px-4 py-2">Price</th>
            <th class="border border-gray-300 px-4 py-2">Description</th>
            <th class="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
            // here to load data
            !loading ?
            user.map((item) => (
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">{item.id}</td>
                <td class="border border-gray-300 px-4 py-2">{item.title}</td>
                <td class="border border-gray-300 px-4 py-2"><img src={item.image} alt="" width="100" /></td>
                <td class="border border-gray-300 px-4 py-2">{item.price}</td>
                <td class="border border-gray-300 px-4 py-2">{item.description}</td>
                <td class="border border-gray-300 px-4 py-2  flex-col flex">
                  <Link to={"/Edit/" + item.id}><i class="fa-solid fa-pen-to-square" style={{ color: "#2354a9" }}></i></Link>
                           
                  <button onClick={()=>deletepro(item.id)} className='cursor-pointer'><i class="fa-solid fa-trash text-[#e0350b]" ></i></button>
                  
                  <Link to={"/Viewpage/" + item.id}><i class="fa-solid fa-eye text-[ #1e2c43]" ></i></Link>
                </td>
              </tr>
            ))
            :<h1 className='text-5xl text-center font-bold py-5'>Loading......</h1>
          }


        </tbody>
      </table>


    </div>
  )
}

export default Admin