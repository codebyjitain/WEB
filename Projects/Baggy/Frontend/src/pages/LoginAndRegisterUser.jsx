import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const LoginAndRegisterUser = () => {

    const [fullname, setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const registerClick = async (e)=>{
        e.preventDefault()
        try {
        const userData = {
            fullname : fullname,
            email : email,
            password : password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register` , userData)
        console.log(response.data)

        if(response.status === 201){
            localStorage.setItem("token", response.data.token)
        }    
        } catch (err) {
            console.log(err.message)   
        }
        
        setFullname('')
        setEmail('')
        setPassword('')

    }

    const loginClick = async (e)=>{
        e.preventDefault()

         const userData = {
            email : email,
            password : password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData)
        if(response.status === 200){
            console.log(response.data.user.token)
            localStorage.setItem("token", response.data.user.token)
        }
        setEmail('')
        setPassword('')
    }


    return (
        <div className='bg-stone-100 w-screen  min-h-screen flex justify-center items-center'>

            <div className='box w-[80vw] flex justify-between items-center bg-white h-[80vh] relative'>
                <h1 className='text-black absolute top-5 text-2xl left-18'>BAGGY</h1>
                <div className='bg-gray-300 ml-25 text-black flex flex-col justify-center items-center w-[35%] h-[100%]'>
                    <div className='flex flex-col gap-2'>

                        <h1 className='text-4xl'>Welcome To <strong className='text-blue-400'>
                            Baggy
                        </strong>
                        </h1>
                        <h2 className='text-2xl'>Create Your Account</h2>
                        <input value={fullname} onChange={(e) =>{
                            setFullname(e.target.value)
                        }} type="text" placeholder='Full Name' className='bg-white p-2 w-full rounded ' />
                        <input value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" placeholder='Email' className='bg-white p-2 w-full rounded ' />
                        <input value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" placeholder='Password' className='bg-white p-2 w-full rounded ' />
                        <button onClick={(e)=>registerClick(e)} className='p-2 text-white bg-blue-400 w-fit rounded-4xl px-4'>
                            Create My Account
                        </button>
                    </div>



                    
                </div>
                    <div className='bg-blue-500 w-fit h-fit p-3 rounded-[50%]'>OR</div>


                <div className=' text-black flex flex-col justify-center items-center w-[50%] h-[100%]'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl'>Login Account</h2>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder='Email' className='bg-gray-200 p-2 w-full rounded ' />
                        <input value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" required placeholder='Password' className='bg-gray-200 p-2 w-full rounded ' />
                        <button onClick={(e)=>loginClick(e)} className='p-2 text-white bg-blue-400 w-fit rounded-4xl px-4'>
                            Login
                        </button>
                    </div>



                    
                </div>
            </div>
        </div>
    )
}

export default LoginAndRegisterUser