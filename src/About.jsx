import React from 'react';
import Saudi from "./saudia.webp";
const About = () => {
    return (
        <>
        <div className='container-flud nav_bg'>
            <div className="row">
                <div className="col-10 mx-auto">
        



          <h1 id="about-page">SAND ARABIA</h1>

          <h2 >Services provider</h2>

          <p>All Over The Kingdom Saudi Arabia</p>

              <span className="saudi">
                  <img src={Saudi} alt="saudi flag" />
                  </span>
            

            </div>
            </div>
        </div>
        </>
    )
}
export default About;