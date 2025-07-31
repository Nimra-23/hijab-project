import React, { useEffect, useState } from 'react'


import arrow from '../../assets/leftarrow.svg'

const Cards = ({ setCounter, counter }) => {
    const loader="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    const [loading,setLoading]=useState(false)
    const [data, setData] = useState([]);
    const [view, setView] = useState({});
    const [likedProducts, setLikedProducts] = useState([]);
    // for the popup products here is the states
    setCounter(likedProducts.length)
    const [isopen, setIsOpen] = useState(false)

    const handleClose = () => setIsOpen(false)

    useEffect(() => {
        fetchapi();
        setLoading(false)
    }, [isopen])

    // to get products
    const fetchapi = async () => {
        let response = await fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json()
        setData(response)

    }

    // get singal product data
    const handleopen = async (id) => {
        setIsOpen(true);
        const api = `http://localhost:3000/posts/${id}`;
        let response = await fetch(api);
        response = await response.json();
        setView(response);
    }


    const handleHeartClick = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };



    return (
        <>
            <div className="grid grid-cols-12 max-w-[1170px] mx-auto gap-5 mt-[50px] sm:px-[20px] px-5">
                <div className='lg:col-span-3 md:col-span-6 col-span-12'>
                    <h2 className='text-[53px] mb-[30px]  font-light '>  Discover Exquisite Hijab Collections at HijabPK</h2>

                    <p className='text-gray-800 text-[16px] col-span-12'>Elevate your style with our chic hijabs – a fusion of modesty and fashion. Discover timeless elegance in every wrap.</p>
                </div>
                {
               ! loading ?
                data.map((data, index) => (
                    <div className='lg:col-span-3 md:col-span-6 col-span-12' >
                        <div key={index} className='MainCard relative'>
                            <img src={data.image} alt="" />
                            <div className="Maincard__circle absolute top-2 left-2 bg-black rounded-full w-[50px] h-[50px] text-white flex justify-center items-center">
                                <span className='text-[12px]'>14%</span>
                            </div>
                            <div className="bg-white w-[30px] h-[50px] slider__Arrow1 flex justify-center items-center">
                                <a href=""> <img src={arrow} alt="" />  </a>
                            </div>
                            <div className="bg-white w-[30px] h-[50px] slider__Arrow2 flex justify-center items-center rotate-[180deg]">
                                <a href="">
                                    <img src={arrow} alt="" /> </a>
                            </div>
                            <div className="p-4    bg-white card ">
                                <h3 className='pb-2 text-[15px]'>{data.title}</h3>
                                <div className='flex items-start gap-2 pb-3'>
                                    <i className="fa-solid fa-star  text-[#FFD43B] text-[12px]"  ></i>
                                    <i className="fa-solid fa-star  text-[#FFD43B] text-[12px]" ></i>
                                    <i className="fa-solid fa-star  text-[#FFD43B] text-[12px]" ></i>
                                    <i className="fa-solid fa-star  text-[#FFD43B] text-[12px]" ></i>
                                    <i className="fa-solid fa-star   text-[#FFD43B] text-[12px]" ></i>
                                </div>
                                <p className='pb-4 text-[11px] flex gap-2'>RS {data.price}<s className=' text-gray-400 '>RS 700</s></p>
                                <div className='  AddtoCart'>
                                    <span className='font-[sans-serif] text-[12px]'>ADD TO CART</span>

                                    <button onClick={() => { handleopen(data.id) }}><i className="fa-solid fa-eye" style={{ color: "#050505" }} ></i></button>
                                    <i
                                        className={`fa-solid fa-heart cursor-pointer `}
                                        style={{ color: likedProducts.includes(data.id) ? 'red' : 'black' }}
                                        onClick={() => handleHeartClick(data.id)}
                                    ></i>
                                    <a href=""><i className="fa-solid fa-code-compare text-[ #000000]" ></i>
                                    </a>

                                </div>


                            </div>

                        </div>
                    </div>

                ))
                : <img src={loader} width={100} height={100} className='flex items-center '/>
                }
                <div className='col-span-12'>
                    <div className="flex justify-center items-center">
                        <button className='lg:px-[20px]  md:px-[15px] px-[5px]  p-3 text-black text-[12px] text-center   hover:opacity-50   border-1 transition duration-300'>
                            SEE ALL PRODUCTS
                        </button>
                    </div>
                </div>
                {/* model opened here */}
                {isopen && (
                    <div className="fixed w-full h-full mx-auto inset-0 z-50 flex items-center justify-center bg-black/60 ">
                        <div className='w-[80%] h-full  '>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-6'>
                                    <img src={view.image} alt="" className='w-full h-full' />
                                </div>
                                <div className='col-span-6 p-2' style={{ background: view.color }}>
                                    <div className='flex justify-end '>
                                        <button
                                            onClick={handleClose}
                                            className="   rounded"
                                        >
                                            close  <i className="text-[20px] fa-solid fa-xmark"></i>
                                        </button>

                                    </div>
                                    <div className=' p-[50px]'>
                                        <h1 className='text-[2rem] font-[300] mb-4 leading-[2.8rem]'>{view.title}</h1>
                                        <p className='text-[13px] leading-[1.3rem] mb-4'>{view.discription}</p>
                                        <p className='text-[15px] mb-4'>Material: <span className='font-[600]'>{view.category}</span></p>
                                        <p className='  font-[600] mb-4'>
                                            <span className='font-[Poppins] text-[30px]   font-[500]'>Rs </span><span className='text-[25px]   font-[500] mr-3'>{view.price}</span> <s className='text-gray-600 text-[15px]'>Rs 700</s>
                                            </p>
                                        <div className='flex gap-3'>
                                            <button className='border-1 border-gray-300 py-3 px-7 font-[600] hover:border-black duration-600 cursor-pointer'> <span className='text-gray-400 text-[20px] '>-</span> <span className='mx-3 text-[20px]'>1</span><span className='text-gray-400  text-[20px]'>+</span></button>
                                            <button className='py-3 bg-black text-center w-[280px] font-[600] text-white text-[15px] cursor-pointer'>ADD TO CART</button>
                                        </div>
                                        <div className='mt-5'>
                                            <p className='text-[13px] '><span className='text-gray-600 mr-[50px]'>Category</span>   {view.category}</p>
                                            <p className='text-[13px] '><span className='text-gray-600 mr-[75px]'>Tags</span>   {view.tags}</p>

                                           
                                        </div>
                                        <p className='text-[15px] font-[600] border-b-2 border-black inline-block mt-6'>View product details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>

    )
}

export default Cards