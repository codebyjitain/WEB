import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Bag from '../components/Bag'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProductData } from '../redux/slices/productSlice'
import { toast } from 'react-toastify'

const Home = () => {
  const dispatch = useDispatch()
  // const products = useSelector((state) => state.product.data)
  const [products,setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product`)
        if (response.status === 200) {
          dispatch(setProductData(response.data.data))
        }
        setProducts(response.data.data)
      } catch (error) {
        toast.error('Failed to fetch products')
      }
    }
    fetchData()
  }, [])


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
          {products.map((product, index) => (
            <Bag
              key={index}
              id={product._id}
              image={`${import.meta.env.VITE_BASE_URL}/image/${product.image}`}
              name={product.name}
              price={product.price}
              panelColor={product.panelcolor}
              textColor={product.textcolor}
              bgColor={product.bgcolor}
            />
          ))}


        </div>
      </div>
    </div>
  )
}

export default Home