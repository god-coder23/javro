import { Car, Leaf, Motorbike, Users } from 'lucide-react'
import React from 'react'

const MiddlePage = () => {
  return (
    <div id='services' className='min-h-screen w-full py-20'>
        
        <div className='flex flex-col gap-7 top-3 justify-center items-center px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold pt-10 md:pt-40 text-center'>Rides For Every Need</h1>
            <p className="text-white/60 leading-8 text-base md:text-lg text-center max-w-2xl mx-auto">
                Whether it's a quick trip to the metro station or a comfortable ride home, Javro provides multiple travel options built around your comfort and budget.
            </p>
        </div>
        <div className='py-10 md:py-15 px-4 sm:px-10 md:px-25'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10'>
                <div className='relative overflow-hidden card-shine h-auto min-h-[22rem] bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,#f0b10060_0%,#f0b10020_1%,transparent_40%)] pt-10 flex gap-5 flex-col backdrop-blur-lg rounded-4xl hover:-translate-y-5 transition duration-500 ease-out'>
                    <div className='h-15 w-15 ml-10 rounded-2xl flex justify-center items-center bg-[#f0b100]'>
                        <Users color='black' size={40} />
                    </div>
                    <h1 className='text-white text-2xl font-[system-ui] font-semibold pl-10'>Sharing Autos</h1>
                    <p className='text-white/60 pl-10 pr-6'>Affordable daily commutes. Share your ride and reduce your carbon footprint.</p>
                    <div className='mt-8 pt-4 w-[70%] ml-10 border-t border-white/5  flex items-center font-medium'></div>
                </div>
                
                <div className='relative overflow-hidden card-shine h-auto min-h-[22rem] bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,#8e97a2_0%,#8e97a220_1%,transparent_40%)] pt-10 flex gap-5 flex-col backdrop-blur-lg rounded-4xl hover:-translate-y-5 transition duration-500 ease-out'>
                    <div className='h-15 w-15 ml-10 rounded-2xl flex justify-center items-center bg-white/7'>
                        <Car color='white' size={40} />
                    </div>
                    <h1 className='text-white text-2xl font-[system-ui] font-semibold pl-10'>Book Autos</h1>
                    <p className='text-white/60 pl-10 pr-6'>Get an auto instantly for your personal trips. Reliable, fast, and secure.</p>
                    <div className='mt-8 pt-4 w-[70%] ml-10 border-t border-white/5  flex items-center font-medium'></div>
                </div>

                <div className='relative overflow-hidden card-shine h-auto min-h-[22rem] bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,#00a63d_0%,#00a63d20_1%,transparent_40%)] pt-10 flex gap-5 flex-col backdrop-blur-lg rounded-4xl hover:-translate-y-5 transition duration-500 ease-out'>
                    <div className='h-15 w-15 ml-10 rounded-2xl flex justify-center items-center bg-[#00a63d]'>
                        <Leaf color='white' size={40} />
                    </div>
                    <h1 className='text-white text-2xl font-[system-ui] font-semibold pl-10'>E-Rickshaws</h1>
                    <p className='text-white/60 pl-10 pr-6'>Eco-friendly rides for short distances. Go green with Javro E-Rides.</p>
                    <div className='mt-8 pt-4 w-[70%] ml-10 border-t border-white/5  flex items-center font-medium'></div>
                </div>

                <div className='relative overflow-hidden card-shine h-auto min-h-[22rem] bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,#ffffff_0%,#ffffff20_1%,transparent_40%)] pt-10 flex gap-5 flex-col backdrop-blur-lg rounded-4xl hover:-translate-y-5 transition duration-500 ease-out'>
                    <div className='h-15 w-15 ml-10 rounded-2xl flex justify-center items-center bg-white'>
                        <Motorbike color='black' size={40} />
                    </div>
                    <h1 className='text-white text-2xl font-[system-ui] font-semibold pl-10'>Instant Bikes</h1>
                    <p className='text-white/60 pl-10 pr-6'>Beat the traffic. Quick and solitary rides for the fastest route possible.</p>
                    <div className='mt-8 pt-4 w-[70%] ml-10 border-t border-white/5  flex items-center font-medium'></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MiddlePage
