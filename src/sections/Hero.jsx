import React from 'react'
import HeroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='bg-neutral-50 font-Poppins'>
      <div className='container flex md:flex-row flex-col-reverse items-center gap-12 py-28 relative'>
        {/* left content */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl font-bold '>
            Hi, I am{' '}
            <span className='text-purple-900 animate-pulse cursor-pointer text-5xl md:text-5xl lg:text-7xl font-black uppercase'>
              RoboBear
            </span>
          </h1>
          <p className='text-gray-500 my-6 leading-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias ratione fuga, explicabo quos voluptatum vero quidem nam
            laudantium. Cumque numquam quis id placeat quo maiores debitis
            repellat harum ea.
          </p>
          <button className='btn btn-black hover:bg-gray-700'>Who am I</button>
          <button className='btn btn-white ml-4'>Talk to me</button>
        </div>

        {/* right content */}
        <div className='flex-1'>
          <div className='w-2/4 sm:w-1/3 md:w-4/6 lg:w-5/6 mx-auto hover:animate-bounce transition ease-in-out delay-150 cursor-pointer'>
            <img className='w-full' src={HeroImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
