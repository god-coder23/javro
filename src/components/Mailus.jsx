import { ArrowRight, ArrowRightFromLine, Smartphone } from 'lucide-react'
import React from 'react'
import apple from "../images/apple.svg";
import playstore from "../images/playstore.svg";
const Mailus = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      <div className='flex flex-col justify-center items-center pt-30 gap-10'>
        <div className='flex flex-row gap-2 h-10 w-70 ring-1 ring-[#f0b100]/50 justify-center items-center rounded-3xl'>
            <Smartphone color='#f0b100' />
            <h1 className='text-[#f0b100] text-lg'>Launching Soon</h1>
        </div>
        <div className='text-white text-6xl font-extrabold leading-17 text-center'>Your Next Ride is <br /> <span className='text-yellow-400'>One Tap Away</span></div>
        <p className='text-zinc-500 text-xl text-center'>Join thousands of early adopters. Get notified when our iOS and Android <br /> apps go live and receive exclusive launch benefits!</p>
        <div className='text-white hover:border-2 hover:border-yellow-500/50 transition duration-300  w-105 h-17 rounded-4xl border-2 border-white/15 flex items-center pl-6 gap-3'>
        <input 
            type="email" 
            placeholder='Enter your email' 
            className='text-white outline-none flex-1 bg-transparent'
        />
        <button className='flex items-center gap-2 w-40 justify-center bg-yellow-500 text-black font-semibold  h-12 rounded-4xl mr-4'>
            Notify Me
            <ArrowRight size={20} />
        </button>
        </div>
        <div className='flex flex-row gap-5'>
            <div className='h-20 w-60 hover:border-2 hover:border-yellow-500/50 bg-[#18181b] hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center rounded-3xl'>
                <img src={apple} className='h-10 w-10' alt="" />
               <div className='flex flex-col pl-3'>
                    <h1 className='text-white/60 text-sm'>Coming soon on the</h1>
                    <h1 className='text-white text-lg font-bold'>App Store</h1>
               </div>
            </div>
            <div className='h-20 w-60 hover:border-2 hover:border-yellow-500/30 bg-[#18181b] hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center rounded-3xl'>
                <img src={playstore} className='h-10 w-10' alt="" />
               <div className='flex flex-col pl-3'>
                    <h1 className='text-white/60 text-sm'>Coming soon on the</h1>
                    <h1 className='text-white text-lg font-bold'>Play Store</h1>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mailus
