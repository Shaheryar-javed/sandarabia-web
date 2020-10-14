
import React from 'react';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';

import {Switch, Route, Redirect} from 'react-router-dom';


const MyApp = () => {
    return (
       <>
       <Navbar />
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Services' component={Services}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Redirect to='/' />
        </Switch>
         </>
    )
}
 

export default MyApp;
