// src/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';
import './App.css';

const Profile = ({ name }) => {
  const [profilePic, setProfilePic] = useState('');

  const App = () => {
    const users = ['Alice', 'Bob', 'Charlie', 'Diana'];}

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/200x200?face');
        setProfilePic(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching the random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <>
    <div className="profile-card">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h3>{name}</h3>
    
  
      <h1>User Profiles</h1>
      <div className="profile-list">
        {users.map((user, index) => (
          <Profile key={index} name={user} />
        ))}
      </div>
      </div>
  
    </>
  );
};

export default Profile;
