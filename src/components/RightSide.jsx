import React from 'react'
import logo_bg_remove from '../images/logo_bg_remove.png';
const RightSide = () => {
  return (
    <div className='pr-17 py-35'>
        <div className='w-110 h-110 bg-gradient-to-br from-[#1c2836] to-black ring-8 ring-[#101928] rounded-4xl shadow-[0px_10px_200px_150px_#f0b10015] flex flex-col items-center justify-center'>
            <div className=''>
                <img className='h-60 w-60' src={logo_bg_remove} alt="" />
            </div>
            <h1 className='text-yellow-500 animate-pulse mb-10'>Coming Soon....</h1>
            <div className='h-2 w-20 bg-white/20 rounded-3xl -mb-10'></div>
        </div>
    </div>
  )
}

export default RightSide
