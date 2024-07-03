import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const RecentlyAdded = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetch = async()=>{
      try{

      const response = await axios.get( 'https://localhost:7189/api/Store/get/recents');
      console.log(response.data)
      setData(response.data)
      }catch(err){
        console.log(err.message);
        //console.log(response);
        
      }
    }
    fetch()
  },[])
  console.log(data)
  
  
  return (
    

   <div>
      <h4 className='recent'>Recently Added Books</h4>
      
      <div className=' data2 my-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {!data && 
        <div class="flex items-center justify-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
      </div>}
    
        {data && data.map((item,i)=>(
           <div key={i}><BookCard data={item}/></div>
        ))}
      
      </div>
      </div>

  )
}

export default RecentlyAdded