import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { useSyncExternalStore } from 'use-sync-external-store';

const AllBooks = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7189/api/Store/get/products');
        console.log(response.data);
        setData(response.data.$values);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.log(err.message);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchData();
  }, [setData]); // Added setData to dependencies to avoid lint warnings

  return (
    <div className='allbooks -m bg-zinc-900 h-auto px-12 py-8'>
      <h4 className='recent'>All Books</h4>
      <div className='data2 my-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {loading && ( // Render loading spinner when data is being fetched
          <div className="flex items-center justify-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        )}
        {!loading && data && data.map((item, i) => (
          <div key={i}><BookCard data={item} /></div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
