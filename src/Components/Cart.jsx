import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LuLoader } from 'react-icons/lu';
import { MdImageSearch } from 'react-icons/md';

const Cart = () => {
  const [cart,setCart] = useState([]);
  const id = localStorage.getItem('id')

  useEffect(()=>{
   const getCart = async () =>{
    try{
    const response = axios.get(`https://localhost:7189/api/Store/GetAddToCart?userId=${id}`);
    console.log("Get Cart Succes");
    setCart(0);
    console.log(response.data)
    }catch(err){
      console.log(err.message)
    }

     
   }
   getCart();
   },[])
  
  return (
    
<>
<div></div>
{!cart && (<LuLoader/>)}
    
    {cart == 0 && (
      <>
      <div className='cart-em-m'>
      <div className='cart-em-t-m'>
      <h1 className='cart-em-t text-5xl lg:text-6xl'>Empty Cart</h1>
      <img 
      src='https://up.yimg.com/ib/th?id=OIP.vQz706_VdPQL7ZswORUKpwHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111'/>
      </div>
      </div>
      </>
      
  )

}

{cart && cart.length > 0 && (
  <>
  <h1 className='cart-u-t'>
    Your Cart
  </h1>
  {cart.map((item,i)=>(
    <div key={i} className='cart-map my-4 object-cover'>
       <img src={item.$values.url}
       className='img-cart'/>
       <div>
        <h1>
          {item.title}
        </h1>
        <p>
          {item.desc.slice(0,65)}....
        </p>
       </div>
    </div>
  ))}
  </>
)}
</>
)
}
export default Cart