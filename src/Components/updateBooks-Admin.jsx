import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBooksAdmin = () => {
    const params = useParams();
    const [data,setData] = useState('');
    const [img,setImg] = useState('');
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [lang,setLang] = useState('');
    const [price,setPrice] = useState('');
    const [rent,setRent] = useState('');
    const [des,setDes] = useState('');
    const [quan,setQuan] = useState('');
    const[id,setId] = useState('')
const token= localStorage.getItem("token");


    const addBook = async () =>{
        try{
          const response = await axios.post('https://localhost:7189/api/Store/AddBooksAdmin',
            {
                books_Id:id ,
                name:title,
              description: des,
              author: author,
              url: img,
              price: price,
              rental_Price: rent,
              language: lang,
              quantityAvailable: quan
            },
            {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
          )
        }catch(err){
          console.log(err.message)
        }
    }
  return (
    <div className='add-book-m'>
    <h1 className='add-book-t text-3xl'>
       Update Books
       </h1>
       <div className='add-book-c bg-zinc-900'>
       <div>
               <label className='url-a-label'>
                   Book Id
               </label>
               <input
               className='img-input'
               required
               placeholder='url Image'
               value={params.Books_Id}
               onChange={(e)=> setId(e.target.value)}
               />
           </div>
           <div>
               <label className='url-a-label'>
                   Image
               </label>
               <input
               className='img-input'
               required
               placeholder='url Image'
               value={params.url}
               onChange={(e)=> setImg(e.target.value)}
               />
           </div>
           <div className='title-c'>
               <label className='url-a-title'>
                   Title of Books
               </label>
               <input
               className='title-input'
               required
               placeholder='url Image'
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
               />
           </div>
           <div className='author-c'>
               <label className='url-a-author'>
                   Author of Book
               </label>
               <input
               className='author-input'
               required
               placeholder='url Image'
               value={author}
               onChange={(e)=>setAuthor(e.target.value)}
               />
           </div>
           <div className='price-r-l'>
               <div className='l-c'>
               <label className='url-a-la'>
                   Language
               </label>
               <input
               className='la-input'
               required
               placeholder='url Image'
               value={lang}
               onChange={(e)=>setLang(e.target.value)}
               />
           </div>
           <div className='l-c'>
               <label className='url-a-la'>
                   Price 
               </label>
               <input
                 className='la-input'
               required
               placeholder='url Image'
               value={price}
               onChange={(e)=>setPrice(e.target.value)}
               />
           </div>
           </div>
           <div className='price-r-l'>
           <div className='l-c'>
               <label className='url-a-la'>
                  Rental Price 
               </label>
               <input
                  className='la-input-rent'
               required
               placeholder='url Image'
               value={rent}
               onChange={(e)=>setRent(e.target.value)}
               />
           </div>
           <div className='l-c'>
               <label className='url-a-la'>
                  Quantity Available 
               </label>
               <input
                  className='la-input-rent'
               required
               placeholder='url Image'
               value={quan}
               onChange={(e)=>setQuan(e.target.value)}
               />
           </div>
           </div>
     
           <div className='desc-c'>
               <label className='url-a-d'>
                   Description of Book
               </label>
               <textarea
               className='des-input'
               required
               placeholder='url Image'
               value={des }
               onChange={(e)=>setDes(e.target.value)}
               />
           </div>
           <button className='button-a px-3 py-2 bg-blue-900' onClick={addBook}>
               Add Book
           </button>
       </div>

   </div>
  )
}

export default UpdateBooksAdmin