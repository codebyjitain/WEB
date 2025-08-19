import React from 'react'

const AdminBag = (props) => {
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
            </div>
        </div>
  )
}

export default AdminBag