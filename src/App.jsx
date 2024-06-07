import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx'


function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Home' element={<Home />}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
