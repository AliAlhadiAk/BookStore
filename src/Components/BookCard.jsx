import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({data}) => {
  console.log(data.name)
  return (
    <Link to={`/view-book-details/${data.books_Id}`}>
    <div className='data-m  bg-zinc-800 rounded p-4 flex flex-col'>
      <div className='data-c bg-zinc-900 rounded flex items-center justify-center'>
        <img src={data.url} alt='/' className='h-[25vh] img-data'/>
      </div>
      <h2 className='data-name mt-4 text-xl text-zinc-200 font-semibold'>{data.name}</h2>
      <p className='data-author mt-2 text-zinc-400 font-semibold'>{data.author}</p>
      <p className="data-price mt-2 text-zinc-400 font-semibold">$$ {data.price}</p>

    </div>
    </Link>
  )  
}

export default BookCard