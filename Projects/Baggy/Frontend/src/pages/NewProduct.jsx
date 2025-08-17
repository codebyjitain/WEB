import React from 'react'
import Navbar from '../components/Navbar'

const NewProduct = () => {
  return (
    <div>
      <Navbar title="AdminPanel" />
      <div className='mt-10 mb-10 w-screen box-border flex  min-h-fit'>
        <div className='w-[18%] flex gap-3 flex-col h-[750px] items-center'>
          <div>


            <div className='mb-5'>All Products</div>
            <div>Create New Products</div>
          </div>

        </div>
        <div className='w-[82%] pr-5'>
          <h1 className='text-3xl mb-4'>Create New Products</h1>
          <hr />
          <h2 className='text-2xl mt-5'>Product Details</h2>
          <form >
            <div className='flex w-[35%] mt-10 justify-between'>

              <h3 className='text-xl'>Product Image</h3>
              <label htmlFor="file-upload" className='bg-blue-500 px-4 py-2 rounded-2xl'>Select</label>
              <input type="file" id='file-upload' className='hidden' />
              
            </div>
            <div className='flex w-[35%] justify-between mt-3 flex-wrap gap-1'>
                <input className='w-full px-4 py-2 bg-zinc-200' type="text" placeholder='Product Name' />
                <input className=' px-4 py-2 bg-zinc-200' type="number" placeholder='Product Price' />
                <input type="number" placeholder='Discount Price' className=' px-4 py-2 bg-zinc-200' />
              </div>

              <h2 className='text-2xl mt-20'>Panel Details</h2>

              <div className='flex w-[35%] justify-between mt-3 flex-wrap gap-1'>
                <input className='px-4 py-2 bg-zinc-200' type="text" placeholder='Background Color' />
                <input className=' px-4 py-2 bg-zinc-200' type="number" placeholder='Panel Color' />
                <input type="number" placeholder='Text Color' className=' px-4 py-2 bg-zinc-200' />
              </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default NewProduct