import React from 'react'
import PriceCard from '../components/PriceCard'

const Pricing = () => {
  return (
    <div>
      <div className='bg-purple-900 text-white font-Poppins py-28'>
        <div className='container relative'>
          <div className='text-center text-slate-200 uppercase text-xl lg:text-3xl'>
            Pricing
          </div>
          <h1 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold my-5 sm:my-6 md:my-7 lg:my-9'>
            The right price for your research.
          </h1>
          <p className='text-center text-slate-200 text-xl md:text-xl mb-28'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            ducimus suscipit quod officiis fugit corrupti unde, aliquid
            repudiandae sint voluptatem vero hic iste sit asperiores consequatur
            quidem veniam et!
          </p>
          <div className='absolute top-92 sm:top-80 md:top-72 lg:top-64 left-0 right-0 grid grid-cols-2 gap-5 md:gap-7 lg:gap-9'>
            <PriceCard />
            <PriceCard />
          </div>
        </div>
      </div>
      <div className='pb-28 container' style={{ height: '450px' }}>
        <h1>WHITE</h1>
      </div>
    </div>
  )
}

export default Pricing
