import React from 'react'
import PlatformCard from '../components/PlatformCard'

const AllInOnePlatform = () => {
  return (
    <div className='font-Poppins'>
      <div className='container mt-72 pb-28'>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>
          All-In-One Platform
        </h1>
        <p className='text-slate-500 text-md md:text-lg lg:text-xl my-4 md:my-5 lg:my-8 text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facere non dicta consectetur adipisicing elit. Nesciunt facere non
          dicta.
        </p>
        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />
        </div>
      </div>
    </div>
  )
}

export default AllInOnePlatform
