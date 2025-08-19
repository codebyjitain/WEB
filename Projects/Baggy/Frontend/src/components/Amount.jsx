import React from 'react'
import { useSelector } from 'react-redux'

const amount = () => {
  const cartData = useSelector((state) => state.product.data)
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Price BreakDown</h1>
      <div className='flex flex-col ml-4 text-lg gap-4'>
        <div className='flex w-[300px] justify-between'>
          <h2>Total MRP</h2>
          <h2>₹ {cartData.price}</h2>
        </div>
        <div className='flex w-[300px] justify-between'>
          <h2>Discount On MRP</h2>
          <h2>₹ {cartData.discount}</h2>
        </div>
        <div className='flex w-[300px] justify-between'>
          <h2>PlatForm Fee</h2>
          <h2>₹ 0</h2>
        </div>
        <div className='flex w-[300px] justify-between'>
          <h2>Shipping Fee</h2>
          <h2>₹ 20</h2>
        </div>
      </div>
      <hr className='w-[100%]' />
      <div className='flex w-[300px] text-xl justify-between'>
          <h2>Total Amount</h2>
          <h2>₹ {cartData.price - cartData.discount + 20}</h2>
        </div>
        <button className='bg-black text-white px-2 py-1 rounded-xl'>
          Place order
        </button>


    </div>
  )
}

export default amount