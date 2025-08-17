import React from 'react'
import Navbar from '../components/Navbar'
import Bag from '../components/Bag'

const Home = () => {
  return (
    <div>
      <Navbar title="Shop" />
      <div className='mt-10 mb-10 w-screen box-border flex  min-h-fit'>
        <div className='w-[18%] flex justify-between flex-col items-center h-[750px]'>
          <div className='flex flex-col h-[25%] justify-between'>

            <div className='flex text-xl gap-4'>

              <label htmlFor="sort">sort by:</label>
              <select className='border-1 border-zinc-500' name="sort">
                <option value="popular">popular</option>
                <option value="x">X</option>

              </select>
            </div>
            <div className='text-lg'>
              <div>New Collection</div>
              <div>All Products</div>
              <div>Discounted Products</div>
            </div>
          </div>
          <div className='text-lg mb-10'>
            <h2>Filter By:</h2>
            <div>Availibilty</div>
            <div>Discount</div>
          </div>

        </div>
        <div className='w-[82%] flex flex-wrap gap-20'>
          <Bag />
          <Bag />
          <Bag />
          <Bag />
          <Bag />
          <Bag />
          <Bag />
          <Bag />
          <Bag />

        </div>
      </div>
    </div>
  )
}

export default Home