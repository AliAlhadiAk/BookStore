import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-800 text-white px-8 py-4 flex items-center justify-between'>
      <div><h1 className='text-2xl font-bold'>BookHeaven</h1></div>
      <div>
        
        <ul className='flex gap-5 '>
          <li className='hover:text-blue-500 transition-all duration-300'>Home</li>
          <li className='hover:text-blue-500 transition-all duration-300'>About Us</li>
          <li className='hover:text-blue-500 transition-all duration-300'>All Books</li>
          <li className='hover:text-blue-500 transition-all duration-300'> Cart</li>
          <li className='hover:text-blue-500 transition-all duration-300'>Profile</li>
        </ul>
      
    
      </div>
      <div className='gap-4 flex'>
        <button className='px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-black transition-all duration-300'>SignIn</button>
        <button className='px-4 py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>SignUP</button>
        </div>
    </div>
  )
}

export default Navbar