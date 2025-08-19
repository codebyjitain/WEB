import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Bag from '../components/Bag'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProductData } from '../redux/slices/productSlice'
import AdminBag from '../components/AdminBag'
import { NavLink } from 'react-router-dom'

const AdminPanel = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product`)
                if (response.status === 200) {
                    dispatch(setProductData(response.data.data))
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchData()
    }, [])


    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/product/delete`)
            if (response.status === 200) {
                console.log("All products deleted")
                dispatch(setProductData([])) // Clear the product data in Redux store
            }
        } catch (error) {
            console.error("Error deleting products:", error);
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
                <div className='w-[82%] '>
                    <button onClick={(e)=>handleDelete(e)} className='mb-5 text-lg text-red-500'>Delete All</button>
                    <div className='flex flex-wrap gap-20'>

                        {products.map((product, index) => (
                            <AdminBag
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
        </div>
    )
}

export default AdminPanel