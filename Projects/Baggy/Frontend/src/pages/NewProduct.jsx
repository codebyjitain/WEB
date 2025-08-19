import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const NewProduct = () => {
  const [file, setFile] = useState(null)
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [panelColor, setPanelColor] = useState('')
  const [textColor, settextColor] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  const handleProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", file)
    formData.append("productName", productName)
    formData.append("productPrice", productPrice)
    formData.append("discountPrice", discountPrice)
    formData.append("panelColor", panelColor)
    formData.append("textColor", textColor)
    formData.append("backgroundColor", backgroundColor)

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/product/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (response.status === 200) {
        toast.success('Product created successfully')
        setFile(null)
        setProductName('')
        setDiscountPrice(0)
        setProductPrice(0)
        setPanelColor('')
        settextColor('')
        setBackgroundColor('')
      }
    } catch (err) {

    }

  }







  return (
    <div>
      <Navbar title="AdminPanel" />
      <div className='mt-10 mb-10 w-screen box-border flex  min-h-fit'>
        <div className='w-[18%] flex gap-3 flex-col h-[750px] items-center'>
          <div className='flex flex-col '>



            <NavLink className='mb-5 cursor-pointer' to='/admin'>
              All Products
            </NavLink>
            <NavLink to='/newproduct' className='cursor-pointer'>
              Create New Products

            </NavLink>
          </div>

        </div>
        <div className='w-[82%] pr-5'>
          <h1 className='text-3xl mb-4'>Create New Products</h1>
          <hr />
          <h2 className='text-2xl mt-5'>Product Details</h2>
          {/* form from here */}
          <div className='flex w-[35%] mt-10 justify-between'>

            <h3 className='text-xl'>Product Image</h3>
            <label htmlFor="file-upload" className='bg-blue-500 px-4 py-2 rounded-2xl'>Select</label>
            <input type="file" onChange={(e) => {
              setFile(e.target.files[0])
            }} id='file-upload' className='hidden' />

          </div>
          <div className='flex w-[35%] justify-between mt-3 flex-wrap gap-1'>
            <input onChange={(e) => {
              setProductName(e.target.value)
            }} value={productName} className='w-full px-4 py-2 bg-zinc-200' type="text" placeholder='Product Name' />
            <input onChange={(e) => {
              setProductPrice(e.target.value)
            }} value={productPrice} className=' px-4 py-2 bg-zinc-200' type="number" placeholder='Product Price' />
            <input onChange={(e) => {
              setDiscountPrice(e.target.value)
            }} value={discountPrice} type="number" placeholder='Discount Price' className=' px-4 py-2 bg-zinc-200' />
          </div>

          <h2 className='text-2xl mt-20'>Panel Details</h2>

          <div className='flex w-[20%] gap-4 justify-between mt-3 flex-col gap-1'>
            <div className='flex items-center justify-between'>

              <label htmlFor="backgroundcolor">Background Color</label>
              <input onChange={(e) => {
                setBackgroundColor(e.target.value)
              }} value={backgroundColor} className='bg-zinc-200' type="color" id='backgroundcolor' />
            </div>
            <div className='flex items-center justify-between'>

              <label htmlFor="textcolor">Text Color</label>
              <input onChange={(e) => {
                settextColor(e.target.value)
              }} value={textColor} className='bg-zinc-200' type="color" id='textcolor' />
            </div>
            <div className='flex items-center justify-between'>

              <label htmlFor="panelcolor">Panel Color</label>
              <input onChange={(e) => {
                setPanelColor(e.target.value)
              }} value={panelColor} className='bg-zinc-200' type="color" id='panelcolor' />

            </div>
            <button onClick={(e) => {
              handleProduct(e)
            }} className='bg-blue-500 px-4 py-2 rounded-3xl mt-10'>Create Product</button>

          </div>


        </div>
      </div>
    </div>
  )
}

export default NewProduct