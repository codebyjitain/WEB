import React from 'react'

const CartBag = () => {
    return (
        <div className='w-96 h-120 bg-amber-300'>
            <div className='h-[65%] '>
                <img src="" alt="product image" />
            </div>
            <div className='h-[20%] bg-pink-400 flex justify-between items-center px-3'>
                <h2>Bag Name</h2>
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
            <div className='h-[15%] bg-gray-500 flex justify-between items-center px-3'>
            <h2>Net Total</h2>
                <h2>RS. xxxx</h2>
            </div>
        </div>
    )
}

export default CartBag