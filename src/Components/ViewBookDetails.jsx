import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { GrLanguage } from 'react-icons/gr';
import { BiLoader } from 'react-icons/bi';
import { FaDeleteLeft, FaHeart } from 'react-icons/fa6';
import { FaEdit, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ViewBookDetails = ({ data }) => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("id");
    const LoggedIn = useSelector((state)=> state.auth.isloggedIn);
    const role = useSelector((state)=> state.auth.role);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://localhost:7189/api/Store/id?id=${id}`);
                console.log(response.data);
                setProduct(response.data);
            } catch (err) {
                console.log(err.message);
            }
            
        };
        fetch();
    }, [id]);
    const handleDelete = async () => {
        try {
            const response = await axios.delete(
              `https://localhost:7189/api/Store/DeleteBooksAdmin?book_id=${id}`,
          
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );
            console.log("Profile data received:", response.data);
            navigate('/all-books')
            
          } catch (error) {
           console.log(err.message)
           console.log(err.message.response)
           
          }
    }
    
    const handleCart = async () => {
        try {
            const response = await axios.post(
              `https://localhost:7189/api/Store/AddToCart?userId${idUser}&BookId=${id}`,
          
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );
            console.log("Profile data received:", response.data);
            
            
          } catch (error) {
           console.log(err.message)
           console.log(err.message.response)
           
          }
    }
    const handleFav = async () => {
        try {
            const response = await axios.post(
              `https://localhost:7189/api/Store/Favorites?bookId=${id}&userId=${idUser}`
          
             
            );
            console.log("Profile data received:", response.data);
            
            
          } catch (error) {
           console.log(err.message)
           console.log(err.message.response)
           
          }
    }

    const posts = data.filter((item) => item.books_Id === id);

    return (
        <div >
            {!product ? (
                <BiLoader />
            ) : (
                <div className='view-book-d px-12 py-8 bg-zinc-900'>
                    <div className='view-book bg-zinc-800 rounded px-4 h-screen md:flex'>
                        <img src={product.url} alt={product.name} className='img-view' />
                        {LoggedIn === true && role == "USER" && (
                            <div className='icons-m'>
                            <button className='icon rounded-full text-2xl' onClick={handleFav}><FaHeart/></button>
                            <button className='icon btn-shop' onClick={handleCart}><FaShoppingCart/></button>
                        </div>
                        )}
                          {LoggedIn === true && role == "ADMIN" && (
                            <div className='icons-m'>
                            <Link to={`/edit/${id}`}  className='icon rounded-full text-2xl'><FaEdit/></Link>
                            <button className='icon btn-shop' onClick={handleDelete}><FaDeleteLeft/></button>
                        </div>
                        )}
                    </div>
                    <div className="p-4">
                        <h1 className='name-view text-4xl text-zinc-300 font-semibold'>{product.name}</h1>
                        <p className='author-view text-zinc-400 mt-1'>by {product.author}</p>
                        <p className='desc-view text-zinc-500 mt-4 text-xl'>{product.description} this book talks about alot of interesting things i relly advice you to readit its so exciting!!!
                        Al5aaal is the author of all books that you see now in the store he is a Senior Web Developer</p>
                        <p className='lan-view flex mt-4 items-center justify-start text-zinc-400'>
                            <GrLanguage className='me-3' />{product.language}
                        </p>
                        <p className=' price-view mt-4 text-zinc-100 text-3xl font-semibold'>
                            Price: ${product.price}
                        </p>
                        <p className='  price-view mt-4 text-zinc-100 text-3xl font-semibold'>
                            Rental_Price: ${product.rental_Price}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewBookDetails;
