import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import { BrowserRouter , Router, Route ,Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import QuoteForm from './QuoteForm.jsx';
import Homes from './pages/Homes.jsx';
import Footer from './components/Footer.jsx';
import { Navigate } from "react-router-dom";
import Headers from './components/Headers.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import './StarRating.css';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart.jsx';










 



function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
   <BrowserRouter>
   
   <Routes>
  
   <Route path='/' element={<Signup  />}>  </Route>
   <Route path='/Login' element={<Login  />}>  </Route>
   <Route path='/home'element={<Home  />}>  </Route>
     <Route path='/QuoteForm'element={<QuoteForm  />}>  </Route>
     <Route path='/homes'element={<Homes />}>  </Route>
    <Route path='/Cleaning Prodects'element={< Homes />}>  </Route>
    
   
     <Route path='/search'element={<Homes  />}>  </Route>
     <Route path='/product/:id'element={<ProductDetails cartItems={cartItems}  setCartItems={setCartItems}/>}>  </Route>
     <Route path='/cart'element={<Cart cartItems={cartItems}  setCartItems={setCartItems} />}>  </Route>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App


