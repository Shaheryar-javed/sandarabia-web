import React from 'react';
// import Saudi from "./saudia.webp";
import Com from "./com.jpg";
const About = () => {
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-10 mx-auto">
        


       
         

          <h2 className="about-heading" >Services provider</h2>

          <p className="about-para">All Over The Kingdom Saudi Arabia</p>

         <span> <h3> we are providing Services all over the kingdom <br />
          Communication , information technology & Trading </h3></span>

              <div className="saudi">
                  {/* <img src={Saudi} alt="saudi flag" /> */}
                  <img src={Com} alt="computer" />
                </div>
            
                  
            </div>
            </div>
        </div>
        </>
    )
}
export default About;