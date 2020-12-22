import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='container-flud '>
            <div className="row">
                <div className="col-10 mx-auto">

                
           <nav className="navbar navbar-expand-lg navbar-dark bg-success">

  <NavLink className="navbar-brand p-6" to="/" ><b>Manu</b></NavLink>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home"><b>Home</b> <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about"><b>About</b></NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/services"><b>Service</b></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact"><b>Contact</b></NavLink>
      </li>
    </ul>
  </div>

</nav>
</div>
            </div>
        </div>
        </>
    );
}
export default Navbar;