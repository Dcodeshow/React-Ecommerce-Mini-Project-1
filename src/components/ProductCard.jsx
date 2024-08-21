import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CreateContext'


const ProductCard = (props) => {

  let { cart,setCart} = useContext(CartContext)
  let data = props.productData;
  let [isAdding,setIsAdding] = useState(false)

  let AddtoCart = (e,data) => {
    e.preventDefault();
    console.log(data);
    
    let _cart = { ...cart }
    if (!_cart.item) { 
      _cart.item = {};   
    }
    if (_cart.item[data.id]) {
      _cart.item[data.id] = _cart.item[data.id] + 1
    }
    else { 
      _cart.item[data.id] = 1
    }
    if (!_cart.totalitem) { 
      _cart.totalitem = 0;
    }
    _cart.totalitem += 1;
    setCart(_cart)

    //button added
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

  } 

  return (
    <div className="col-md-3 mb-4">
      <Link to={`products/${data.id}`}>
        <div className="card">
          <img className="card-img-top" src={data.image} alt="Card"></img>
          <div className="card-body"> 
            <h4 className="card-title text-uppercase">{ data.category}</h4>
            <p className="card-text text-truncate">{ data.title}</p>
            <div className="d-flex align-items-center justify-content-between">
              <p className="card-link m-0 fw-bold">Rs: {data.price}</p>
              <button onClick={(e) => { AddtoCart(e, data) }} href="#" className={  isAdding ? 'btn btn-success' : 'btn btn-primary'} >
                Add{  isAdding ? 'ed' : ''}
              </button>
            </div>
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default ProductCard
