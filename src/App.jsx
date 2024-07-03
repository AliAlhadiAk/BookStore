import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/home'
import Footer from './Components/Footer'
import AllBooks from './Components/AllBooks';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import ViewBookDetails from './Components/ViewBookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './Components/auth';
import Favourites from './Favourites';
import UserOrderHistory from './UserOrderHistory';
import Setting from './Setting';
import AddBook from './Components/AddBook';
import UpdateBooksAdmin from './Components/updateBooks-Admin';

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const role = useSelector((state)=> state.auth.role);


  useEffect(()=>{
   if(
    localStorage.getItem("id")&&
    localStorage.getItem("token")&&
    localStorage.getItem("role")
   ){
    dispatch(authActions.login());
    dispatch(authActions.changeRole(localStorage.getItem('role')))
   }
  },[])

  return (
    <>
      <div>
       
        <Navbar/>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/all-books' element={ <AllBooks data={data} setData={setData}/>}/>
          <Route exact path='/cart' element={ <Cart/>}/>
          <Route exact path='/profile' element={ <Profile/>}>
           { role == "USER" ? (<Route index element={<Favourites/>}/>): (<Route path='/profile/add-book' element={<AddBook/>}/>)}
            {role == ["ADMIN"] && <Route path='/profile/orderHistory' element={<UserOrderHistory/>}/>}
            <Route path='/profile/settings' element={<Setting/>}/>
          </Route>
          {role == ["ADMIN"] && <Route path='/edit/:id' element={<UpdateBooksAdmin/>}/>}
           
          
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route exact path='/LogIn' element={ <Login/>}/>
          <Route path='view-book-details/:id' element={<ViewBookDetails data={data}/>}/>


        </Routes>
        <Footer/>
 
       
        </div>
    </>
  )
}

export default App
