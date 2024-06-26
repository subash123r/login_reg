import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import ProductCard from "../components/productCard";
import { useSearchParams } from 'react-router-dom';

function Homes(){
  const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()


    useEffect(() => {
        fetch('http://localhost:8000/api/v1/products?' +searchParams )
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])
    

    return(
        <>
     <Headers cartItems={cartItems}/>
     
      <h1 id="products_heading">Latest Products</h1>
        
      <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =>  <ProductCard product={product}/>)}
      
      </div>
      </section> 
      <Footer  />
      

      </>
    )
}

export default Homes