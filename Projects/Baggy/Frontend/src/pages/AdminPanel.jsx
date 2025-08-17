import React from 'react'
import Navbar from '../components/Navbar'
import Bag from '../components/Bag'

const AdminPanel = () => {
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
                <div className='w-[82%] '>
                    <button className='mb-5 text-lg text-red-500'>Delete All</button>
                    <div className='flex flex-wrap gap-20'>

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
        </div>
    )
}

export default AdminPanel