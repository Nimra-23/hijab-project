import React, { useEffect, useState } from 'react'

const Scrollup = () => {
const [visible, setVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);







  return (
    <div>

        {/* <!-- Scroll Top --> */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-black hover:bg-white hover:text-[#000] font-bold hover:border-2-black border flex justify-center items-center w-[45px] h-[45px] text-white text-[20px] p-3 rounded-full shadow-lg transition duration-300"
      >
        ↑
      </button>
    </div>
    
  )
}

export default Scrollup