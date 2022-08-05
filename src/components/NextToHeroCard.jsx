import React from 'react'

const NextToHeroCard = ({ title, subtitle }) => {
  return (
    <div className='shadow-md px-5 pt-5 pb-4 md:pt-8 md:pb-6 rounded-md border font-Poppins'>
      <h1 className='text-3xl md:text-5xl font-bold text-purple-800'>
        {title}
      </h1>
      <p className='text-slate-500 mt-2'>{subtitle}</p>
    </div>
  )
}

export default NextToHeroCard
