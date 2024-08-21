import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CreateContext'


const Header = () => {

  let { cart } = useContext(CartContext);
  console.log(cart.totalitem)

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FlipMart.Com
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>          
          <li className="nav-item ms-4">
            <Link to='/carts' className="btn btn-primary">
              Cart <span className="badge bg-danger">{ cart.totalitem}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
