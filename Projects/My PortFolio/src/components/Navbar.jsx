import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState("home")

  
  return (
    <div className="w-screen text-lg h-30 flex text-white justify-between items-center">
      <div className="flex text-xl ml-30 gap-2">
        <h2 className="font-bold text-2xl">PortFolio</h2>
      </div>

      <div className="mr-10 text-xl flex gap-10">
        <a href="#" onClick={()=>{setActive("home")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "home" ? 'bg-white text-black': ''}`}>Home</a>
        <a href="#about" onClick={()=>{setActive("about")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "about" ? 'bg-white text-black': ''}`}>About Me</a>
        <a href="#projects" onClick={()=>{setActive("skills")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "skills" ? 'bg-white text-black': ''}`} >Skills</a>
        <a href="#projects" onClick={()=>{setActive("projects")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "projects" ? 'bg-white text-black': ''}`} >Projects</a>
        <a href="#achievements" onClick={()=>{setActive("achievements")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "achievements" ? 'bg-white text-black': ''}`}>Achievements</a>
        <a href="#contact" onClick={()=>{setActive("contact")}} className={`hover:text-blue-300 px-4 py-2 rounded-4xl ${ active === "contact" ? 'bg-white text-black': ''}`}>Contact Me</a>
      </div>
    </div>
  );
};

export default Navbar;
