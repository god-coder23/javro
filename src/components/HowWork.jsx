import { CreditCard, MapPin, Search, ThumbsUp } from 'lucide-react'
import React from 'react'

const HowWork = () => {
  return (
    <div className='h-150 w-screen bg-[#09080a]'>
      <div className='flex flex-col '>
        <h1 className='text-white text-5xl font-bold font-[system-ui] px-30 py-20'>How <span className='text-yellow-500'>Javro</span> Works</h1>
        <p className='text-[#99a1af] leading-8 -mt-10 ml-30 text-lg'>A seamless booking experience. Getting from A to B has never been so easy and <br />instant. Just follow four simple steps.</p>
      </div>
      {/*how work cards */}
      <div className='flex flex-row px-30 gap-10 justify-center items-center'>
        <div className='py-10'>
            <div className='h-65 w-75 hover:border-1 hover:border-yellow-500/70 hover:-translate-y-2.5 transition duration-500 ease-out bg-black ring-1 ring-white/10 rounded-3xl p-5 flex flex-col gap-5'>
                <div className='bg-yellow-500 h-20 w-20 rounded-3xl flex justify-center items-center'>
                    <MapPin size={40} />
                </div>
                <h1 className='text-white text-2xl font-bold ml-2 '>01 <span className='text-white ml-2'>Enter Destination</span></h1>
                <p className='text-[#6a6e79]'>Open the Javro app, enter where you want to go, and let us do the rest.</p>
            </div>
        </div>

        <div className='py-10'>
            <div className='h-65 w-75 hover:border-1 hover:border-yellow-500/70 hover:-translate-y-2.5 transition duration-500 ease-out bg-black ring-1 ring-white/10 rounded-3xl p-5 flex flex-col gap-5'>
                <div className='bg-white h-20 w-20 rounded-3xl flex justify-center items-center'>
                    <Search size={40} />
                </div>
                <h1 className='text-white text-2xl font-bold ml-2'>02 <span className='text-white ml-2'>Choose Ride</span></h1>
                <p className='text-[#6a6e79]'>Select between Sharing Auth, Auto, E-Rickshaw, or Bike based on your need.</p>
            </div>
        </div>

        <div className='py-10'>
            <div className='h-65 w-75 hover:border-1 hover:border-yellow-500/70 hover:-translate-y-2.5 transition duration-500 ease-out bg-black ring-1 ring-white/10 rounded-3xl p-5 flex flex-col gap-5'>
                <div className='bg-[#fef085] h-20 w-20 rounded-3xl flex justify-center items-center'>
                    <CreditCard size={40} />
                </div>
                <h1 className='text-white text-2xl font-bold ml-2'>03 <span className='text-white ml-2'>Instant Booking</span></h1>
                <p className='text-[#6a6e79]'>Confirm the ride to get instantly connected with our verified drivers nearby.</p>
            </div>
        </div>

        <div className='py-10'>
            <div className='h-65 w-75 hover:border-1 hover:border-yellow-500/70 hover:-translate-y-2.5 transition duration-500 ease-out bg-black ring-1 ring-white/10 rounded-3xl p-5 flex flex-col gap-5'>
                <div className='bg-yellow-500 h-20 w-20 rounded-3xl flex justify-center items-center'>
                    <ThumbsUp size={40} />
                </div>
                <h1 className='text-white text-2xl font-bold ml-2'>04 <span className='text-white ml-2'>Enjoy The Ride</span></h1>
                <p className='text-[#6a6e79]'>Track your ride in real-time, pay securely online or by cash, and arrive safely.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowWork
