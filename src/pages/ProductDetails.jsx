import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import { toast} from "react-toastify";


function ProductDetails({cartItems,setCartItems}){
  
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const {id} = useParams();

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/'+ '/product/'+id)
        .then(res => res.json())
        .then( res => setProduct(res.product))
    },[])
    function addtocart(){
      const itemExist = cartItems.find((item) => item.product._id == product._id)
      if (!itemExist) {
        const newItem = {product, qty};
        setCartItems((state) => [...state, newItem]);
        toast("Cart Item added succesfully!")
      }
    
    }
 
    function incereaseQty(){
      if (product.stock == qty) {
        return;
    }
      setQty((state) => state + 1);
    }

    function decreaseQty() {
      if (qty > 1) {
          setQty((state) => state - 1);
      }
  }
    return(
 
   
           product && <div className="container container-fluid">
             <Headers cartItems={cartItems}/>
              <div className="row f-flex justify-content-around">
             
                <div className="col-12 col-lg-5 img-fluid" id="product_image">
                  <img src={"/templates/images/images (1).jpg"} alt="Dell Inspiron" height="500" width="500" />
                </div>
        
                <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                  <p id="product_id">Product #{product._id}</p>
        
                  <hr />
        
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
        
                  <hr />
        
                  <p id="product_price">${product.price}</p>
                  <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                    <input type="number" className="form-control count d-inline" value={qty} readOnly />
                    <span className="btn btn-primary plus"onClick={incereaseQty}>+</span>
                  </div>
                  <button type="button" onClick={addtocart} disabled={product.stock == 0} id="cart_btn" className="btn btn-primary d-inline ml-4">
                    Add to Cart
                  </button>
        
                  <hr />
        
                  <p>
                    Status: <span id="stock_status"className={product.stock > 0 ?'text-success':'text-danger'}>{product.stock > 0  ?'In Stock' : 'Out of Stock'}</span>
                  </p>
        
                  <hr />
        
                  <h4 className="mt-2">Description:</h4>
                  <p>
                    {product.description}
                  </p>
                  <hr />
                  <p id="product_seller mb-3">
                    Sold by: <strong>{product.seller}</strong>
                  </p>
        
                  <div className="rating w-50"></div>
                </div>
              </div>
              <Footer  />
            </div>
        
        
         
        
    )
}
export default ProductDetails