import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import Headers from "./Headers";
import logosImage from '../assets/images/logo.png';
import productImages from '../assets/images/download (1).jpg';
import '../StarRating.css';
import 'bootstrap/dist/css/bootstrap.min.css';




  export default function ProductCard({product}) {
      return <div className="col-sm-12 col-md-6 col-lg-3 my-3">
              <div className="card p-3 rounded">
                  <img
                  className="card-img-top mx-auto"
                  src={productImages}
                  />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                  <Link to={"/product/"+product._id} >{product.name}</Link>
                  </h5>
                  <div className="ratings mt-auto">
                      <div className="rating-outer">
                      <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}} ></div>
                      </div>
                  </div>
                  <p className="card-text">${product.price}</p>
                  <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link>
                  </div>
              </div>
          </div>
  }