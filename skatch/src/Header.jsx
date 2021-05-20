import React from 'react';
import './css/Header.css';
import { NavLink } from 'react-router-dom';
// import './js/Header.js';

function Header(){
    function sideMenuAppear(){
        setInterval(() => {
            document.getElementById("LeftHeaderMenuicon").click();
        }, 4000);
    }
    return(
        <React.Fragment>
            {/* <!-- Start Header --> */}
            <header className="SkatchDark leftHeader">
                <label id="LeftHeaderMenuicon" onClick={sideMenuAppear}>
                    <i className="material-icons">menu</i>
                </label>
                <NavLink exact to="skatch"><label className="Headerlogo" skatch-tooltip="Skatch"><a href="javascript:void(0)">Skatch</a></label></NavLink>
            </header>
                <div className="leftHeaderMenuOptions">
                    <ul>
                        <li className="SkatchGithubRepo"><a href="https://github.com/XSarthakJain/skatch.github.io" ><i className="fa fa-github"></i></a></li>
                        <NavLink exact to="skatch/gettingstarted"><li><a >Getting Started</a></li></NavLink>
                        <NavLink exact to="skatch/alert"><li><a >Alert</a></li></NavLink>
                        <NavLink exact to="skatch/badge"><li><a >Badge</a></li></NavLink>
                        <NavLink exact to="skatch/button"><li><a >Button</a></li></NavLink>
                        <NavLink exact to="skatch/card"><li><a>Card</a></li></NavLink>
                        <NavLink exact to="skatch/footer"><li><a>Footer</a></li></NavLink>
                        <NavLink exact to="skatch/navbar"><li><a>Header</a></li></NavLink>
                        <NavLink exact to="skatch/popup"><li><a>PopUp</a></li></NavLink>
                        <NavLink exact to="skatch/toast"><li><a>Toast</a></li></NavLink>
                        <NavLink exact to="skatch/tooltip"><li><a>Tooltips</a></li></NavLink>
                        <NavLink exact to="skatch/form"><li><a>Form</a></li></NavLink>
                    </ul>
                </div>
            {/* <!-- End Header --> */}
        </React.Fragment>
    );
}

export default Header;