import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {

  const [product, SetProduct] = useState({});

  let params = useParams()
  console.log(params)

  const history = useNavigate()

  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${ params.id}`)
      .then((response) => response.json())
      .then((data) => SetProduct(data))
  },[])

  return (
    <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
            <b className='btn btn-primary mb-3' onClick={() => { history(-1)}} >Back</b>
            </div>
            <div className="col-md-5">
              <div className="main-img">
                <img className="img-fluid border p-5" src={product.image} alt="ProductS" />

              </div>
            </div>
            <div className="col-md-7">
              <div className="main-description">
                <div className="category text-bold text-uppercase">
                  <b className='text-bold '>Category:</b> { product.category}  
                </div>
                <div className="product-title text-bold my-3">
                   { product.title}
                </div>
                <div className="price-area my-4">

                  <p className="new-price text-bold mb-1 fs-3"><b>Rs:</b>  { product.price}</p>
                  <p className="text-secondary mb-1">(Additional tax may apply on checkout)</p>
                </div>

              </div>
              <div className="product-details my-4">
                <b className="details-title text-color mb-1">Product Details</b>
                <p className="description"> { product.description}</p>
              </div>

              <div className="delivery my-4">
                <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-truck" /></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                <p className="text-secondary">Order now to get this product delivery</p>
              </div>
              <div className="delivery-options my-4">
                <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-filter" /></span> <b>Delivery options</b> </p>
                <p className="text-secondary">View delivery options here</p>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}
