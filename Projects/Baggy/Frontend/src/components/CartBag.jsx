import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProductData } from '../redux/slices/productSlice'

const CartBag = () => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.product.data)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const user = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/cart`, {
                    params: {
                        token: token,
                    }
                })

                
                const cartData = user.data.data.cart
                
                console.log(cartData)
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product/getproducts`, {
                    params:{
                        cartData : cartData
                    }
                }) 

                if(response.status === 200){
                    dispatch(setProductData(response.data.data[0]))
                }


            } catch (error) {
                console.error('Error fetching cart:', error)
            }
        }
        fetchCart()
    }, [])

    console.log(cartData)

    return (
        <div className='w-96 h-120 bg-amber-300'>
            <div className='h-[65%] '>
                <img className='w-full h-full object-cover' src={`${import.meta.env.VITE_BASE_URL}/image/${cartData.image}`} alt="product image" />
            </div>
            <div style={{ backgroundColor: cartData.panelcolor }} className='h-[20%] flex justify-between items-center px-3'>
                <h2>{cartData.name}</h2>
                <h2 className='flex gap-2 items-center'>

                    <div className='bg-white rounded-[50%] p-1 w-7'>
                        <img src='src/assets/plus.png' alt="add" />
                    </div>
                    <div className='bg-white p-1 rounded'>1</div>
                    <div className='bg-white rounded-[50%] p-1 w-7'>
                        <img src='src/assets/plus.png' alt="add" />
                    </div>
                </h2>
            </div>
            <div style={{ backgroundColor: cartData.bgcolor, color: cartData.textcolor }} className='h-[15%] flex justify-between items-center px-3'>
                <h2>Net Total</h2>
                <h2>₹ {cartData.price}</h2>
            </div>
        </div>
    )
}

export default CartBag