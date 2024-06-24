// src/App.js
import React from 'react';
import Profile from './Profile';
import './App.css';

const App = () => {
  const users = ['Alice', 'Bob', 'Charlie', 'Diana'];

  return (
    <div className="App">
      <h1>User Profiles</h1>
     
        {users.map((user, index) => (
          <Profile key={index} name={user} />
        ))}
      
    </div>
  );
};

export default App;
