import React from 'react'

const Bag = () => {
    return (
        <div className='w-60 h-72 bg-amber-300'>
            <div className='h-[70%] '>
                <img src="" alt="product image" />
            </div>
            <div className='h-[30%] bg-gray-500 flex justify-between items-center px-3'>
                <div>
                    <h2>Bag Name</h2>
                    <h2>RS. xxxx</h2>
                </div>
                <div className='bg-white rounded-[50%] p-1 w-7'>
                    <img src='src/assets/plus.png' alt="add" />
                </div>
            </div>
        </div>
    )
}

export default Bag