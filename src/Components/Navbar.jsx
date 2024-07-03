import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './auth';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(authActions.logout());
    dispatch(authActions.changeRole("user"));
    localStorage.clear("id");
    localStorage.clear("token");
    localStorage.clear("role");
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
   // { title: "Profile", link: "/profile" },
  ];
  
  const isLogged = useSelector((state) => state.auth.isloggedIn);
  const role = useSelector((state)=> state.auth.role);
  
  if (isLogged === false) {
    links.splice(2, 2);
  }

  return (
    <>
      <div className='nav px-8 py-2'>
        <div className='title'>
          <h1>📚 Al5aal</h1>
        </div>
        <div className='nav-links'>
          <div className='toggle'>
            {links.map((link, i) => (
              <Link className='ali1' to={link.link} key={i}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className='login-signup'>
            {isLogged === false && (
              <div className='login-signup'>
                <Link to='/LogIn' className='button-axios sign-in'>Login</Link>
                <Link to='/SignUp' className='button-axios sign-up'>Sign-Up</Link>
              </div>
            )}
            {isLogged && role == "USER" &&  (
              <>
                <Link className='profile-user px-4 py-1 border-blue-500 hover:bg-white' to={'/profile'}>
                  Profile
                </Link>
                <Link to='' className='button-axios sign-in' onClick={logout}>logout</Link>
              </>
            )}
             {isLogged && role == ["ADMIN"] && (
              <>
                <Link className=' bg-zinc-900 profile-user px-4 py-1 border-blue-500 hover:bg-white' to={'/profile'}>
                  Admin Profile
                </Link>
                <Link to='' className='button-axios sign-in' onClick={logout}>logout</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
