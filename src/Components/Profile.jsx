import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';
import { LuLoader } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching profile data...");
      try {
        const response = await axios.get(
          `https://localhost:7189/api/Authentication/id?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log("Profile data received:", response.data);
        setProfile(response.data);
        
      } catch (error) {
        console.error("Error fetching profile data:", error);
       
      }
    };

    if (token && id) {
      fetchData();
    } else {
      console.error("Token or ID not found in localStorage.");
    }
  }, []);

  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 profile-m'>
      {!profile ? (
        <div className='loader-m'><LuLoader className='loader'/></div>
      ) : (
        <>
          <div className='sidebar-m md:w-1/6'><Sidebar data={profile}/></div>
          <div className='outlet md:w-5/6'><Outlet/></div>
        </>
      )}
    </div>
  );
};

export default Profile;
