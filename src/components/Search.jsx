import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';



function Search(){

    const [keyword, setKeyword]  = useState("");
    const navigate = useNavigate();


    const searchHandler = () => {
        navigate('/search?keyword='+keyword)
    }

 return(
    <div className="input-group">

   
   
   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => setKeyword(e.target.value)} onBlur={searchHandler}/>

<div><button className="btn btn-outline-success" type="submit" onClick={searchHandler}>Search</button></div>
</div>


 )   
}
export default Search