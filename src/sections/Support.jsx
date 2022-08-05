import React from 'react'
import SupportCard from '../components/SupportCard'

const Support = () => {
  return (
    <div className='py-16 lg:py-28 bg-fixed bg-support-image bg-center'>
      <div className='container relative'>
        <div className='text-center text-slate-200 uppercase text-xl lg:text-3xl'>
          Support
        </div>
        <h1 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold my-5 sm:my-6 md:my-7 lg:my-9'>
          Finding the right team
        </h1>
        <p className='text-center text-slate-200 text-xl md:text-2xl lg:text-2xl mb-28'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
          ducimus suscipit quod officiis fugit corrupti unde, aliquid
          repudiandae sint voluptatem vero hic iste sit asperiores consequatur
          quidem veniam et!
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-9 absolute left-0'>
          <SupportCard />
          <SupportCard />
          <div className='hidden lg:block'>
            <SupportCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
