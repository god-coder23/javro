import { ArrowRight, Smartphone } from 'lucide-react'
import React from 'react'
import apple from "../images/apple.svg"
import playstore from "../images/playstore.svg"

const Mailus = () => {
  return (
    <div id='getapp' className='min-h-screen w-screen bg-black flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-10 px-4'>
        
        {/* Header Badge */}
        <div className='flex items-center gap-2 h-10 px-4 ring-1 ring-[#f0b100]/50 rounded-3xl'>
          <Smartphone color='#f0b100' size={20} />
          <h1 className='text-[#f0b100] text-lg font-medium'>Launching Soon</h1>
        </div>

        {/* Main Title */}
        <div className='text-white text-5xl md:text-6xl font-extrabold leading-tight text-center'>
          Your Next Ride is <br /> 
          <span className='text-yellow-400'>One Tap Away</span>
        </div>

        {/* Description */}
        <p className='text-zinc-500 text-lg md:text-xl text-center max-w-2xl'>
          Join thousands of early adopters. Get notified when our iOS and Android apps go live and receive exclusive launch benefits!
        </p>

        {/* Newsletter Form */}
        <div className='w-full max-w-md border-2 border-white/15 hover:border-yellow-500/50 bg-black/50 backdrop-blur rounded-4xl px-6 py-6 transition duration-300'>
          <form 
            onSubmit={()=>{
                window.alert("Be ready to unlock next level booking!")
                console.log("form submited")
            }}
            action="https://formspree.io/f/xkopjplb"
            method="POST"
          className='flex flex-col gap-3'>
            <input 
              required
              name='name'
              id='name'
              type="text" 
              placeholder='Enter your name' 
              className='w-full px-4 py-3 bg-zinc-900/50 border border-white/20 text-white placeholder-zinc-600 rounded-3xl outline-none transition duration-300 hover:border-yellow-500/30 focus:border-yellow-500'
            />

            <input 
              required
              name='number'
              id='number'
              type="tel" 
              placeholder='Enter your number' 
              className='w-full px-4 py-3 bg-zinc-900/50 border border-white/20 text-white placeholder-zinc-600 rounded-3xl outline-none transition duration-300 hover:border-yellow-500/30 focus:border-yellow-500'
            />

            <input 
              required
              name='email'
              id='email'
              type="email" 
              placeholder='Enter your email' 
              className='w-full px-4 py-3 bg-zinc-900/50 border border-white/20 text-white placeholder-zinc-600 rounded-3xl outline-none transition duration-300 hover:border-yellow-500/30 focus:border-yellow-500'
            />

            <button 
              type='submit'
              className='w-full mt-3 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-3xl transition duration-300 flex items-center justify-center gap-2'
            >
              Notify Me
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* App Store Links */}
        <div className='flex flex-col md:flex-row gap-5 mt-4'>
          {/* App Store Card */}
          <div className='flex items-center gap-4 h-20 px-6 bg-[#18181b] border border-white/10 hover:border-yellow-500/50 rounded-3xl transition duration-300 hover:scale-105 cursor-pointer'>
            <img src={apple} className='h-10 w-10' alt="Apple App Store" />
            <div className='flex flex-col'>
              <p className='text-white/60 text-sm'>Coming soon on the</p>
              <p className='text-white font-bold text-lg'>App Store</p>
            </div>
          </div>

          {/* Play Store Card */}
          <div className='flex items-center gap-4 h-20 px-6 bg-[#18181b] border border-white/10 hover:border-yellow-500/50 rounded-3xl transition duration-300 hover:scale-105 cursor-pointer'>
            <img src={playstore} className='h-10 w-10' alt="Google Play Store" />
            <div className='flex flex-col'>
              <p className='text-white/60 text-sm'>Coming soon on the</p>
              <p className='text-white font-bold text-lg'>Play Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mailus
