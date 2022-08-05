import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const PlatformCard = () => {
  return (
    <div className='flex my-5'>
      <div className='1/4'>
        <CheckIcon className='h-6 text-green-600 mr-4' />
      </div>
      <div className='3/4'>
        <h3 className='text-xl font-semibold'>Notifications</h3>
        <p className='text-md text-slate-500 mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit,
          illum debitis error repudiandae ab.
        </p>
      </div>
    </div>
  )
}

export default PlatformCard
