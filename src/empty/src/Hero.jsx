import React from 'react'
import image from './OIP.jpeg'

const Hero = () => {
  return (
    <div className='h-[75vh] flex '>
    <div className='w-3/6 flex flex-col gap-10 items-start justify-center'><h3 className='text-6xl font-bold text-yellow-100'>Discover your Next Great Read</h3>
    <p className='mt-4 text-xl text-center lg:text-left text-zinc-300'>Uncover captivating stories, enriching knowledge and endless isnpiration in our curaated collection of books</p>
    <button className='text-yellow-100 hover:bg-zinc-800  rounded text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-2'>Discover Books</button>
   
    </div>
    <div className='w-full lg:w-3/6 justify-end  '>
     
   </div>
    </div>
  
  )
}

export default Hero