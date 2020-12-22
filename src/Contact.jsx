import React from 'react';
import Cont from "./contect.webp";


const Contact = () => {
    return (
        <>
       <div className='container'>
            <div className="row">
                <div className="col-10 mx-auto">
        



            <h1 >Fill Here Your Contact detail</h1>
            <h2 id="cont-header">And your Commints</h2>
                
                 <div className="form-div">
                 <form className="form">
               First Name {
                    <input type="text" name="firstname" size="18" maxLength="10"></input>
                 }Lastname
                 {<input type="text" name="lastname" size="18" maxLength="10"></input>}
                 <br />
                 { <p>
                     <br />
               Nationality
               <select>
                   <option>paksitan</option>
                   <option>USA</option>
                   <option>canada</option>
                   <option>UK</option>
                   <option>india</option>
                   <option>china</option>
                   <option>turky</option>
               </select>
           </p>}
            
             { 
              <p>  
                  Email Address:              
                    <input type="text" name="Email Address" size="18" maxLength="10"></input>
                    </p>

             }
             {
                 <p>
                 <p>comments:</p>
                 <textarea name="comment" rows="8" cols="55">Enter your comment here...</textarea>
             </p>
             }
             <botton>Submit</botton>
            </form>
           </div>
           
           


            
            </div>
          </div>
        </div>
        
        {/* <div className="cont">    
        <br />
                <img src={Cont} alt="Contact Pic" />
        </div> */}


        </>
    );
}
export default Contact;