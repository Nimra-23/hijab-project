import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddNewProduct from './component/admin/AddNewProduct'
import LoginPage from './component/LoginPage'
import SignUpPage from './component/SignUpPage'
import Home from './pages/homepage/Home'
import Admin from './component/admin/Admin'
import AdminpageDesign from './component/admin/AdminpageDesign'
import Shop from './pages/shop/Shop'
import AllProducts from './component/shop/AllProducts'
import CashmereWool from './component/shop/CashmereWool'
import Chiffongeo from './component/shop/Chiffongeo'
import HotSales from './component/shop/HotSales'
import About from './pages/about/About'
import Mian from './pages/Mian'
import Main2 from './pages/Main2'
import Contact from './pages/contact/Contact'
import Viewpage from './component/admin/Viewpage'
import Againadd from './component/admin/Againadd'
import Edit from './component/admin/Edit'
import ViewProduct from './component/home/ViewProduct'
import { useState } from 'react'
import AddtoCart from './component/AddtoCart'


function App({}) {
  const [counter, setCounter] = useState(0);
 
  return (
    <>
      <Routes >
        <Route path='/' element={<Mian />}>
          <Route index  element={<Home />}/>
          {/* =================viewproduct page in home ==============*/}
          
           
          <Route path='/Shop' element={<Shop />}>
            <Route path="" element={<AllProducts setCounter={setCounter}/>} />
            <Route path="CashmereWool" element={<CashmereWool setCounter={setCounter}/>} />
            <Route path='Chiffongeo' element={<Chiffongeo setCounter={setCounter}/>} />
            <Route path='HotSales' element={<HotSales setCounter={setCounter} />} />
          </Route>
        </Route>
         <Route path='ViewProduct/:id' element={<ViewProduct/>}/>
         
        <Route path='/' element={<Main2 />}>
          <Route  path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route  path='AddtoCart'  element={<AddtoCart/>}/>
        </Route>
        <Route path='' element={<SignUpPage />} />
        <Route path='' element={<LoginPage />} />
        <Route element={<AdminpageDesign />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/AddNewProduct' element={<AddNewProduct />} />
          <Route  path='/Againadd' element={<Againadd/>}/>
          <Route path='Viewpage/:id' element={<Viewpage/>}/>
          <Route path='Edit/:id' element={<Edit/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
