import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";


const Bag = (props) => {
    const token = localStorage.getItem('token')



    const handleAdd = async (e, id) => {
        e.preventDefault()


        try {
            const user = await axios.get(`${import.meta.env.VITE_BASE_URL}/user`, {
                params: {
                    token: token,
                }
            })

            const data = {
                productId: id,
                userEmail: user.data.user.email
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/addtocart`, data)
            toast.success("Product added to Cart successfully!")
        } catch (err) {
            toast.error("Failed to add product to cart. Please try again.")

        }

    }

    return (
        <div className='w-60 h-72' style={{ backgroundColor: props.bgColor, color: props.textColor }}>
            <div className='h-[70%] overflow-hidden '>
                <img src={props.image} className='w-full h-full object-cover' alt="product image" />
            </div>
            <div className='h-[30%]  flex justify-between items-center px-3' style={{ backgroundColor: props.panelColor }}>
                <div>
                    <h2>{props.name}</h2>
                    <h2>₹ {props.price}</h2>
                </div>
                <div onClick={(e) => { handleAdd(e, props.id) }} className='bg-white rounded-[50%] p-1 w-7'>
                    <img src='src/assets/plus.png' alt="add" />
                </div>
            </div>
            
        </div>
    )
}

export default Bag