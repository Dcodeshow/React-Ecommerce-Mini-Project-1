import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, json, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Carts from './pages/Carts'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import { CartContext } from './CreateContext'

export default function App() {

  const [cart, setCart] = useState({})

  useEffect(() => { 
    let cart = localStorage.getItem('cart');
    
    setCart(JSON.parse(cart))
    
  }, [])
  
  useEffect(() => { 
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])



  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/products/:id'  element={<ProductDetails />} />
            <Route path='/carts' element={ <Carts />}/>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
