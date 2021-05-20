import React from 'react';
import './css/commonpage.css';

function Home(){
    return (
        <React.Fragment>
            <div id="particles-js">
                <div>
                    <h2>Build beautiful website , quickly</h2><br/>
                    <p>Skatch is a Open Source Project where you can get multiple components of site.</p><br/>
                    <button className="SkatchBtn SkatchTransparentWhite"><a href="html/gettingstarted.html">Get Started</a></button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;