import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Error.css';
import Errorimg from './images/Pagenotfound.svg';
let Error = function(){
    return(
        <React.Fragment>
            <br/><br/><br/><br/>    
            <img src={Errorimg} alt="page not found" className="errorImg"/>
            <NavLink to="/" exact><button className="backToBtn">Back to Home Page</button></NavLink>
        </React.Fragment>
    );
}

export default Error;