import React from 'react';
import './css/commonpage.css';
import { NavLink } from 'react-router-dom';
function Home(){
    return (
        <React.Fragment>
            <div id="particles-js">
                <div>
                    <h2>Build beautiful website , quickly</h2><br/>
                    <p>Skatch is a Open Source Project where you can get multiple components of site.</p><br/>
                    <button className="SkatchBtn SkatchTransparentWhite"><NavLink exact to="/"><a>Get Started</a></NavLink></button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;