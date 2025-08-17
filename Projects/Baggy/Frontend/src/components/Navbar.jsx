import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <div className='bg-gray-600 w-screen h-[85px]'>

            <div className='bg-white w-screen h-[83px] flex text-black justify-between px-10 items-center'>

                <h1 className='text-3xl capitalize'>{title}.</h1>
                <div className='flex w-[30%] justify-between text-xl'>
                    <div className='flex gap-3'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/newproduct'>Product</NavLink>
                    </div>
                    <div className='flex gap-5'>
                        <NavLink to='/cart'>Cart</NavLink>
                        <NavLink to='/account'>My Account</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar