import React from 'react'
import PriceCardCheck from './PriceCardCheck'

const PriceCard = () => {
  return (
    <div className='p-5 md:p-8 lg:p-10 bg-white shadow-lg rounded-md border font-Poppins'>
      {/* badge */}
      <span className='rounded-full bg-indigo-200 text-indigo-900 text-xs px-5 py-2'>
        STANDARD
      </span>
      {/* Price */}
      <div className='flex mt-5 items-end'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold'>
          $49
        </h1>
        <span className='font-bold text-slate-400 mb-1'>/mo</span>
      </div>

      {/* description */}
      <p className='text-lg text-slate-400 my-5 md:my-7 lg:my-9'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Check bullets */}
      <PriceCardCheck />
      <PriceCardCheck />
      <PriceCardCheck />

      <button className='btn btn-purple w-full mt-5 hover:bg-purple-700'>
        Get Started
      </button>
    </div>
  )
}

export default PriceCard
