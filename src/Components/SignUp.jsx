import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { PiWallDuotone } from 'react-icons/pi';

const SignUp = () => {
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');

  const [pwd,setPwd] = useState('');
  const [address,setAddress] = useState('');


  const [values,setValues] = useState({username:"",email:"",password:"",address:""});
  const navigate = useNavigate();
  const change = (e)=>{
    const {name,value} = e.target;
    setValues({...values,[name]:value});
   
  }
  const submit = async()=>{
      try{
        //if(values.username === "" ||
        //values.email === "" ||
        //values.password === "" ||
        //values.username === "" 
        
          const response = await axios.post('https://localhost:7189/api/Authentication/Sign-Up',
         {userName:userName,email:email,pwd:pwd,Avatar:"alialhadislogo",Address:address}
          );
          console.log(response.data);
          navigate('/login')
        }

      catch(err){
         console.log(err.message)
      }
  }
  return (
    <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center motherReg'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6 daughterReeg' >
      
        <h1 className='text-zinc-200 text-xl RegSign'>SignUp</h1>
        <div className="mt-4 usercontainer ">
          <label className='text-zinc-400 labeluser'>
            UserName
          </label>
          <input type='text'
          className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none username'
          placeholder='UserName'
          
          name='username'
          required
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          
          
/>        </div>
<div className="mt-4 mother">
  <label htmlFor="" className='text-zinc-400 labelemail'>
    Email
  </label>
  <input type='text'
          className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none email '
          placeholder='Email'
          name='Email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required/>

</div>
  <div className="mt-4 passreg">
  <label htmlFor="" className='text-zinc-400 pass'>
    Password
  </label>
  <input type='password'
          className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none password'
          placeholder='Password'
          name='Password'
          value={pwd}
          onChange={(e)=>setPwd(e.target.value)}
          required/>
  </div>
  <div className="mt-4 addm">
    <label className="text-zinc-400 labeladd">
      Adress
    </label>
    <textarea
    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none texte'
    rows="5"
    placeholder='address'
    name='address'
    required
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    />
  </div>
  <div className=" btnm mt-4">
    <button onClick={submit} className='btn-btn w-full bg-blue-500 text-white font-semibold py-2 rounded'>
      Sign Up
    </button>
    <p className=' or flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
      Or
    </p>
    <p className='already flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
     Already have an account? &nbsp;
     <Link to={'/login'} className='hover:text-blue-500 hover'>
      <u>Login</u>
     </Link>
    </p>
  </div>
      </div>
    </div>
  )
}

export default SignUp;