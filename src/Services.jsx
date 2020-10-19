import React from 'react';
import Communication from "./communication.jpg";

const Services = () => {
    return (
        <>
        <div className='container-flud nav_bg'>
            <div className="row">
                <div className="col-10 mx-auto">

                    

                <h1>We are very warm Welcome <br />to you  to Vist here </h1>

<p>We are working Communication and Information technology.</p>

  <h2>Our Experties</h2>
  <br />
  
  
      <ol><strong>Communication</strong></ol>
      <li>Access Control</li>
      <li>Vedio Conferencing</li>
      <li>and Cloud Control</li>
      <br />
      <br />
      <img src={Communication} alt="Communication tower pic" />

      <ol><strong> Information technology </strong></ol>
      <li>Data Center</li>
      <li>Networking</li>
      <li>CCTV Control</li>

  




            </div>
            </div>
        </div>
        </>
    );
}
export default Services;