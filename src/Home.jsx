import React from 'react';
import Com from "./illustration-1.png";

const Home = () => {
    return (
        <>
      
        <div className='container'>

                  <div> <h1 id="header1">Grow Your Business with </h1>
                 
                  <h2 id="tech">  TECH DEVELOPMENT </h2>
                  </div>
                   
                 <p className="para">
                  this is our Home page where you can get 
                  all Information page.<br />As Like <b>About,Services,Contact and other </b>
                 </p>

                  <br />
                  
                     <a href="./about" className='btn-get'> Get Started</a>
                   
                         
                     <img src= {Com} alt="image"  />
                  
                       
                     </div>   
        
       
        </>
    )
}
export default Home;