import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const Favfetch = async () => {
      try {
        const response = await axios.get(`https://localhost:7189/api/Store/get/favorites/id?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Ensure the response data is an array
        const data = Array.isArray(response.data) ? response.data : [];
        setFavorites([response.data]);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    Favfetch();
  }, [id, token]);

  return (
    <div>
      {favorites.map((item, i) => (
        <div key={i}>
          <Link to={`/view-book-details/${item.books_Id}`}>
            <div className='data-m bg-zinc-800 rounded p-4 flex flex-col'>
              <div className='data-c bg-zinc-900 rounded flex items-center justify-center'>
                <img src={item.url} alt='/' className='h-[25vh] img-data' />
              </div>
              <h2 className='data-name mt-4 text-xl text-zinc-200 font-semibold'>{item.name}</h2>
              <p className='data-author mt-2 text-zinc-400 font-semibold'>{item.author}</p>
              <p className='data-price mt-2 text-zinc-400 font-semibold'>$ {item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
