import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { useDispatch } from 'react-redux';
import axios from 'axios'; // Import axios
import { authActions } from './auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('')
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = async () => {
    try {
      if (email == '' || pwd == ''){
         setErrMsg('Please Fill pass and email')
      }
      const response = await axios.post('https://localhost:7189/api/Authentication/Login', {
        email: email,
        pwd: pwd, // Changed key from 'pwd' to 'password'
      });
      console.log(response.data)
      
      dispatch(authActions.login());
      dispatch(authActions.changeRole(response.data.role));  // Add the action type and payload

      localStorage.setItem('id', response.data.id);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role.$values);

      console.log(response.data);
      navigate('/profile');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center motherReg'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6 daughterReeg'>
        <h1 className='text-zinc-200 text-xl RegSign'>LogIn</h1>
        <div className="mt-4 mother">
          <label htmlFor="email" className='text-zinc-400 labelemail'>Email</label>
          <input
            type='text'
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none email'
            placeholder='Email'
            name='email' // Corrected name attribute to lowercase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-4 passreg" onSubmit={submit}>
          <label htmlFor="password" className='text-zinc-400 pass'>Password</label>
          <input
            type='password'
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none password'
            placeholder='Password'
            name='password' // Corrected name attribute to lowercase
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>
        <div className="btnm mt-4">
          <button onClick={submit} className='btn-btn w-full bg-blue-500 text-white font-semibold py-2 rounded'>
            LogIn
          </button>
          <p className='or flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
          <p className='already flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
            Don't have an account? &nbsp; {/* Changed text for clarity */}
            <Link to={'/signup'} className='hover:text-blue-500 hover'>
              <u>Sign Up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
