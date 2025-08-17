import React from 'react'
import Navbar from '../components/Navbar'
import CartBag from '../components/CartBag'
import Amount from '../components/Amount'


const Cart = () => {
  return (
    <div>

    <Navbar title="Cart"/>
      <div className=' flex gap-5 m-10'>
        <div>
          <CartBag />
        </div>
        <div>
          <Amount/>
        </div>
      </div>
    </div>
  )
}

export default Cart