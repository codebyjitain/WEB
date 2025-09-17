import React from 'react'

const About = () => {
  return (
    <div>
      <hr className='h-1' />
      <div className="w-screen flex justify-between items-center h-[200px] bg-gradient-to-r from-[#000000] to-[#d7d7d7]">
        <p className='text-white text-xl pl-4 w-1/2'>
          Hi, I’m Jitain — a passionate developer who loves building clean, functional, and creative digital experiences. From problem-solving in C++ to designing modern web apps with React & Tailwind, I enjoy turning ideas into working projects.
        </p>
        <div className='flex'>

          <img className='w-[400px] h-[150px]' src="/src/assets/mern_icon.png" alt="" />
          <img className='w-[200px] h-[140px]' src="/src/assets/cpp.svg" alt="" />
        </div>

      </div>
      <hr className='h-1' />
      <div className='w-screen gap-20 h-screen flex flex-col justify-center items-center bg-color1'>
        <h1 className='text-4xl border-4 border-black p-3'>About Me</h1>
        <p className='w-1/2 text-center text-lg font-semibold'>I’m a developer who thrives on solving problems and creating efficient solutions. Over the past few years, I’ve honed my skills in C++, Data Structures & Algorithms, and modern web technologies like React, Tailwind CSS, and JavaScript. I enjoy the challenge of debugging complex code as much as the creativity of designing user-friendly UIs.
          When I’m not coding, I love exploring new tech tools, learning continuously, and pushing myself to improve with every project I build.”</p>

        <div className='flex justify gap-20 content-between w-2/3'>

          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-2xl font-semibold'>Development</h2>
            <p className='text-center'>
              I’m a web developer passionate about creating modern, responsive, and user-friendly applications. With experience in React, Tailwind CSS, and JavaScript, I enjoy building clean, scalable, and creative digital experiences that bring ideas to life
            </p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-2xl font-semibold'>Data Structure and Algorithms</h2>
            <p className='text-center'>
              I have a strong foundation in Data Structures and Algorithms (DSA), with problem-solving experience mainly using C++. I focus on writing optimized, efficient, and clean solutions to complex problems, continuously improving my logical thinking and coding efficiency.
            </p>
          </div>
         
        </div>
         <div className='flex flex-col items-center w-1/2'>
            <h2 className='text-2xl mb-2 font-semibold'>Maintenance</h2>
            <p className='text-center'>
              Along with building projects, I also focus on their maintenance and improvement. I believe clean code, proper documentation, and regular updates are essential for long-term reliability. I ensure that applications stay optimized, scalable, and easy to maintain as they grow
            </p>
          </div>
      </div>
    </div>
  )
}

export default About