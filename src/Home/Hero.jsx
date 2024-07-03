import React from 'react'
import './Designer.jpeg'
import { FaGripLines } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className='book-entery '>
            <h1 className='book-e-title'>Discover Your Next Great Read</h1>
            <p className='Desc-e'>Uncovering cptivating Stories,
            enriching knowledge, and endless inspairation in our curated collection of books</p>
            <div className='button-handler'><button className='Discover'>Discover Books</button></div>
            </div>
        <div className='image'>
            <img  className='image' src='https://tse3.mm.bing.net/th?id=OIP.JAKGV_qMNkgXLjwyK6ctYwHaHa&pid=Api&P=0&h=220' alt='hero'/>
        </div>
  
    </div>
    </>
         
  )
}

export default Hero