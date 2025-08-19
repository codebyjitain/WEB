import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <div className='bg-gray-600 w-screen h-[85px]'>

            <div className='bg-white w-screen h-[83px] flex text-black justify-between px-10 items-center'>

                <h1 className='text-3xl capitalize'>{title}.</h1>
                <div className='flex w-[30%] justify-between text-xl'>
                    <div>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='flex gap-5'>
                        <NavLink to='/cart'>Cart</NavLink>
                        <NavLink className='text-red-500' to='/logout'>Logout</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar