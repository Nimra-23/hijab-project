import React, { useState } from 'react'
import Header from '../../component/home/Header'
import Cards from '../../component/home/Cards'
import Bgbanner from '../../component/home/Bgbanner'
import LgBanner from '../../component/home/LgBanner'
import Navbar from '../../component/Navbar'

const Home = () => {
const [counter, setCounter] = useState(0);
 
  return (
    <div>
      <Navbar counter={counter}/>
      <Header />
      <Cards counter={counter} setCounter={setCounter} />
      <Bgbanner />
      <LgBanner />
      
    </div>
  )
}

export default Home