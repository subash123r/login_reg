import React from "react";
import Header from "./Header";
import Services from "./Servise";
import Profileslist from "./ProfilesList";
import Disine from'./Disine.jsx';
import QuoteForm from './QuoteForm';
import Navbars from "./Navbars.jsx";
import Homes from "./pages/Homes.jsx";








function Home(){




return(
<>
    



   <Navbars/>
    <Disine/>

   <Header/>
   <Profileslist/>
   <Services/>
   <div className="subash">    
        <h1>Get Quote</h1>
  <h3>You can reach us at  4164289409</h3>
  <h4>or contact @cleanease.</h4>
  </div>

  
   
</>



    

  
    
)
};
export default Home