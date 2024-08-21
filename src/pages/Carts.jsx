import React, { useContext,useEffect, useState } from 'react'
import { CartContext } from '../CreateContext';

const Carts = () => {

  let { cart } = useContext(CartContext);
  console.log(cart)

  useEffect(() => { 
    console.log(cart.item)
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => { 
        console.log(data)
      })

  }, [])

  //Increment De
  let [count, setCount] = useState(1)
  let price = 2000;
  let [updatedprice, setUpdatedPrice] = useState()

  const increment = () => { 
    setCount(count + 1)
    setUpdatedPrice(price *  count)
  }

  const descrment = () => { 
    if (count > 0) { 
      setCount(count - 1)
      setUpdatedPrice(price -  count)
    }
  }

  const changeHandler = (e)=> { 
    setCount(e.target.value)
  }

  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-md-12">
          <h4>Shopping Cart</h4>
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr valign='middle'>
                <td>
                  <img src="images/peproni.png" alt="" width='100' />
                </td>
                <td className='text-capitalize'>peproni</td>
                <td>{price}</td>
                <td >
                  <span className='d-flex'>
                    <button onClick={descrment} className='btn btn-danger rounded-0'>-</button>
                    <input type="text" name="" onChange={(e)=> changeHandler(e)} readOnly id="" value={count} className='form-control w-25 rounded-0' />
                    <button onClick={increment} className='btn btn-success rounded-0'>+</button>
                  </span>
                </td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
            </tbody>
          </table>
          <div className="card">
            <div className="card-body">
              <p><b>Grand Total</b> { updatedprice}</p> 
              <button type="button" className="btn btn-dark">Order Now</button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Carts
