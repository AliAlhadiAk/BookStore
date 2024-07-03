import React, { useEffect, useState } from 'react'
import Hero from '../Home/Hero'
import RecentlyAdded from './RecentlyAdded'
import BookCard from './BookCard'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

  return (
    <div className='Home bg-zinc-900'>
        <Hero/>
        
      
      
    </div>
  )
}

export default Home