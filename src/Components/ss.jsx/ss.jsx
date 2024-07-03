import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];

  return (
    <>
      <div className='Nav px-8 py-2'>
        <div className='Title'>
          <h1>Al5aal</h1>
        </div>
        <div className='nav-links-bookheaven'>
          
          <div className='login-signup'>
            <Link to={'/LogIn'} className='button-axios Sign-in'>Login</Link>
            <Link to={'/SignUp'} className='button-axios Sign-up'>Sign-Up</Link>
          </div>
          <div className='react-icon' onClick={toggleMenu}>
            <IoMdMenu />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className=''>
          {links.map((link, i) => (
            <Link  className='links' to={link.link}  key={i}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
