import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from './auth'
import { DiSafari } from 'react-icons/di'
import { useSelector } from 'react-redux'

const Sidebar = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.isloggedIn);
  const role = useSelector((state) => state.auth.role);
  
  const logout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.changeRole("user"));
    navigate('/')
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  return (
    <div className='bg-zinc-800 p-4 rounded sidebar'>
      <div>
        <img src='https://avatars.githubusercontent.com/u/166250920?v=4' className='img-profile h-12'/>
        <p className='user-name-profile mt-3 text-xl text-zinc-100 font-semibold'>
          {data.address}
        </p>
        <p className='mt-1 text-normal text-zinc-300 email-profile'>{data.email}</p>
        <div className='undefined w-full mt-4 bg-zinc-500 hidden lg:block'></div>
      </div>
      {isLogged && role === "USER" && (
        <>
          <div className='fav-his-m lg'>
            <Link to={'/profile'} className='fav-his-d'>
              Favorites
            </Link>
            <Link to={'/profile/orderHistory'} className='fav-his-d'>
              OrderHistory
            </Link>
            <Link to={'/profile/settings'} className='fav-his-d'>
              Settings
            </Link>
          </div>
        </>
      )}
      {isLogged && role == ["ADMIN"] && (
        <>
          <div className='fav-his-m lg'>
            <Link to={'/profile/settings'} className='fav-his-d'>
              Innovator
            </Link>
            <Link to={'/profile/add-book'} className='fav-his-d'>
              AddBook
            </Link>
          </div>
        </>
      )}
      <button className='logout' onClick={logout}>
        Logout <FaArrowRightFromBracket className='ms-4'/>
      </button>
    </div>
  )
}

export default Sidebar;
