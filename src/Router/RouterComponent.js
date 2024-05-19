import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Products from '../Components/Products'
import SingleProduct from '../Components/SingleProduct'
import Cart from '../Components/Cart'
import Error from '../Error'
import Accessories from '../Components/Accessories'
import SubCategoryContent from '../SubCategoryContent'
import SignUp from '../Components/LoginSignup/SignUp'
import Login from '../Components/LoginSignup/Login'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Women from '../Components/Women'
import Men from '../Components/Men'
const RouterComponent = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/men' element={<Men />} />
      <Route path='/products' element={<Products />} />
      <Route path='/women' element={<Women />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/category/:company' element={<SubCategoryContent />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />

    </Routes>

  )
}

export default RouterComponent
