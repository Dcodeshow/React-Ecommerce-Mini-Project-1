import React from 'react'
import Slider from '../components/Slider'
import Products from './Products'

const Home = () => {
  return (
    <>
      <Slider />
      <div className="pb-24">
        <Products />
      </div>
    </>
    
  )
}

export default Home
