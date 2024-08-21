import ProductCard from '../components/ProductCard'
import React, { useEffect, useState } from 'react'

const Products = () => {

  let [newdata,setnewData] = useState([])

  useEffect(() => { 
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => { 
        return (
          setnewData(data),
          console.log(data) 
        )  
        })
  },[])

  return (
    <div className="container mt-5 mb-5">
      <div className="alert alert-secondary">
        <strong>Our Top</strong> Products
      </div>
      <div className="row mt-5">
        {
          newdata.map(data => <ProductCard productData={data} key={data.id}  />)
        }
      </div>
    </div>
  )
}

export default Products
