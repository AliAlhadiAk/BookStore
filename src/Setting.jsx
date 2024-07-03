import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Setting = () => {
  const [value,setValue] = useState({address : ""});
  const [profileData,setProfileData] = useState('');
  const [adress,setAddress] = useState('')

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id")
  
  useEffect(() => {
    const fetch = async () =>{
      try{
        const response = await axios.get(`https://localhost:7189/api/Authentication/userInfo?userId=${id}`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        
        );
        console.log(response.data);
        console.log('aliiiiiiiiiii')
        setProfileData(response.data);
        setValue(response.data.address);
      
      }catch(err){
        console.log(err.message);
      }
   
   



    }
    fetch();
  
    
  }, [])
  console.log(profileData);
  console.log(profileData);
  

  return (
    <>
  
    {profileData && (
      <>
      <div className='setting-m mb-4'>
        <h1 className='settings text-3xl'>
          Settings
        </h1>
        <div className='settings-in-m'>
          <div>
            <label className=' bg-zinc-800'>UserName</label>
            <p className='setting-username'>
              {profileData.userName}
            </p>
            <div>
              <label>Email</label>
              <p className='setting-email'>
                {profileData.email}
              </p>
            </div>
          </div>
          <div className='address-m'>
            <label>Address</label>
            <textarea 
            className='admin-text'
            rows={'5'}
            placeholder='Adress'
            value={adress}
            />
          </div>
          <div className='admin-update-add'>
            <button className='addmin-btn-add px-3'>
              Update
            </button>
          </div>
        </div>
      </div>
      </>
    )}
      </>

    
  )
}

export default Setting
