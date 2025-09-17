import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-screen bg-black h-screen flex'>
      <div className='w-1/2 bg-color1 flex flex-col justify-center items-center [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]'>
        <div className='flex gap-7 flex-col'>

          {/* Hello */}
          <h2 className='text-3xl'><strong className='font-semibold'>Hi</strong>, I am</h2>

          {/* Name and Description */}
          <div>

            <h1 className='text-5xl mb-3 font-semibold'>Jitain</h1>
            <h2 className='text-color4'>Web Developer / MERN Stack Developer</h2>
          </div>
          {/* icons of social */}
          <div className='mt-10 flex gap-5'>
            <button className='w-10 h-10 p-2 bg-color3 font-bold'>
              <img src="/src/assets/attherate.svg" alt="" />
            </button>
            <button className='w-10 h-10 p-2 bg-color3 font-bold'>
              <img src="/src/assets/github.svg" alt="" />
              </button>
            <button className='w-10 h-10 p-2 bg-color3 font-bold'>
              <img src="/src/assets/linkdin.svg" alt="" />
            </button>
          </div>
        </div>

      </div>
      <div className='w-1/2 overflow-hidden' >
        <img className='m-20 h-screen' src="/src/assets/jkp.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home