import React from 'react'
import logo from '../images/logo_bg_remove.png';

const NAVBAR_HEIGHT = 64 

const Navbar = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-between items-center h-16 px-6">
          <div className='p-30 cursor-pointer' onClick={()=> scrollToSection("firstpage")}>
            <img className='h-20 w-20' src={logo} alt="logo" />
          </div>
          <div className='flex flex-row gap-8 items-center'>
            <h1 onClick={() => scrollToSection("services")}  className='text-white/80 cursor-pointer'>Services</h1>
            <h1 onClick={() => scrollToSection("howwork")} className='text-white/80 cursor-pointer'>How it Works</h1>
            <div className='bg-yellow-500 h-10 px-4 flex justify-center items-center rounded-3xl'>
              <button onClick={()=>scrollToSection("getapp")} className='text-black font-semibold'>Get the app</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: NAVBAR_HEIGHT }} aria-hidden="true" />
    </>
  )
}

export default Navbar
