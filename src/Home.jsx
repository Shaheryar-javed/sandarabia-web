import React from 'react';
import Com from "./com.jpg";

const Home = () => {
    return (
        <>
        <section id="sec">
        <div className='container-flud nav_bg'>
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>



            <h1 id="header1">Grow Your Business with </h1>
                
                <h2 id="tech">  TECH DEVELOPMENT </h2>
              <br />   
    
            <p>
                this is our Home page where you can get 
                all Information page.<br />As Like <b>About,Services,Contact and other </b>
            </p>
            <br />
            <div className='mt-3'>
            <a href="./about" className='btn-get'> Get Started</a>
            </div>
            <div className="computer">
            <img src= {Com} alt="jpg pic"  />
            </div>
                
           
            
            </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Home;