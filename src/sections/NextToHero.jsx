import React from 'react'
import NextToHeroCard from '../components/NextToHeroCard'

const NextToHero = () => {
  return (
    <div className='py-24 lg:py-28 font-Poppins'>
      <div className='container text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
          Trusted by users across the world
        </h1>
        <p className='text-slate-400 text-md sm:text-xl mt-4 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          nesciunt consequatur ut dolores neque, unde nulla praesentium
          molestia.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <NextToHeroCard title='100%' subtitle='Safety' />
          <NextToHeroCard title='24/7' subtitle='Service' />
          <NextToHeroCard title='100K' subtitle='Users' />
        </div>
      </div>
    </div>
  )
}

export default NextToHero
