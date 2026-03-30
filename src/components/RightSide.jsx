import React from 'react'
import logo_bg_remove from '../images/logo_bg_remove.png';
const RightSide = () => {
  return (
    <div className='flex justify-center items-center py-10 lg:pr-17 lg:py-35'>
        <div className='relative overflow-hidden card-shine w-60 h-60 sm:w-80 sm:h-80 lg:w-110 lg:h-110 bg-gradient-to-br from-[#1c2836] to-black ring-8 ring-[#101928] rounded-4xl shadow-[0px_10px_200px_150px_#f0b10015] flex flex-col items-center justify-center'>
            <div className=''>
                <img className='h-30 w-30 sm:h-40 sm:w-40 lg:h-60 lg:w-60' src={logo_bg_remove} alt="" />
            </div>
            <h1 className='text-yellow-500 animate-pulse mb-10 text-sm sm:text-base'>Coming Soon....</h1>
            <div className='h-2 w-20 bg-white/20 rounded-3xl -mb-10'></div>
        </div>
    </div>
  )
}

export default RightSide
