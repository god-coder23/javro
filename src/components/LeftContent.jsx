import React from 'react'
import { Clock, Shield, Zap } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
const LeftContent = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <div id='firstpage' className='lg:py-7 lg:px-35 px-10 py-7 flex flex-col gap-3 lg:gap-6'>
        <div className='flex flex-row gap-2 h-8 w-60 bg-white/5 justify-center items-center rounded-3xl ring-1 ring-white/20'>
            <Zap color='#ffb803' size={20} />
        <h1 className='text-white/80 text-sm '>The Future of Instant Rides</h1>
        </div>
        <div className='text-white text-5xl lg:text-7xl md:text-5xl font-bold lg:leading-[6rem] sm:leading-snug'>
            <h1 className=''>Instantly Book <br /> <span> Share <span className='text-yellow-500'> Autos & </span></span> <br /> <span className='text-yellow-500'>Bikes</span></h1>
        </div>
        <div className='leading-[2.5rem] max-w-xl text-gray-400 lg:text-xl md:text-lg sm:text-sm sm:flex sm:justify-center sm:items-center'>
            <p className=''>Javro connects you with Autos, Shared Autos, E-Rickshaws, and Bikes instantly. Experience reliable, fast, and affordable rides right at your fingertips.</p>
        </div>
        <div className='flex flex-row gap-5 items-center pb-9 w-[100%] border-b border-white/20'>
            <div className='h-15 w-50 bg-yellow-500 flex justify-center items-center rounded-4xl hover:scale-110 transition duration-300 ease-in-out hover:bg-yellow-400'>
                <div onClick={()=>scrollToSection("getapp")} className='flex flex-row gap-1 items-center'>
                    <button className='text-xl font-semibold'>Download App</button>
                    <ArrowRight size={20} />
                </div>
            </div>
            <div onClick={() => scrollToSection("services")} className='w-40 h-15 rounded-4xl font-[system-ui] bg-white/15 flex justify-center items-center ring-1 ring-white/25 backdrop-blur-sm hover:scale-110 transition duration-300 ease-in-out hover:bg-white/20'>
                <button className='font-semibold text-white font-[system-ui]'>Learn More</button>
            </div>
        </div>
        <div className='flex flex-row gap-15'>
            <div className='gap-2 flex flex-col'>
                <Shield color='#f0b100' />
                <h1 className='text-white font-semibold'>Safe & secure</h1>
                <p className='text-white/40 text-sm'>Verified partners</p>
            </div>
            <div className='gap-2 flex flex-col'>
                <Clock color='#f0b100' />
                <h1 className='text-white font-semibold'>Instant Booking</h1>
                <p className='text-white/40 text-sm'>Fast Pickup</p>
            </div>
            <div className='gap-2 flex flex-col'>
                <Zap color='#f0b100' />
                <h1 className='text-white font-semibold'>Affordable</h1>
                <p className='text-white/40 text-sm'>Transparent pricing</p>
            </div>
        </div>
    </div>
  )
}

export default LeftContent
