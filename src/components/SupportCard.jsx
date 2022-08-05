import React from 'react'
import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/outline'

const SupportCard = () => {
  return (
    <div className='bg-white rounded-lg shadow-md border relative'>
      <div className='px-4 lg:px-9 pt-7 pb-5 lg:pt-14 lg:pb-8'>
        <div className='bg-purple-500 p-2 lg:p-4 absolute -top-6 rounded-lg left-8 text-white font-semibold'>
          <PhoneIcon className='h-5 lg:h-7' />
        </div>

        {/* content */}
        <h1 className='text-md sm:text-xl lg:text-2xl font-bold'>
          Technical Support
        </h1>
        <p className='text-sm sm:text-lg lg:text-xl mt-2 lg:mt-4 text-slate-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maiores
          simi.
        </p>
      </div>

      {/* footer */}
      <div className='bg-purple-100 group px-5 lg:px-9 py-3 flex items-center cursor-pointer'>
        <h1 className='text-sm md:text-md lg:text-lg text-purple-900 font-medium mr-2 group-hover:ml-5 duration-300'>
          Contact Us
        </h1>
        <ArrowRightIcon className='h-4 text-purple-900' />
      </div>
    </div>
  )
}

export default SupportCard
