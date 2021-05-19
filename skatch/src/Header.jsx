import React from 'react';
import './css/Header.css';
// import './js/Header.js';

function Header(){
    return(
        <React.Fragment>
            {/* <!-- Start Header --> */}
            <header className="SkatchDark leftHeader">
                <label id="LeftHeaderMenuicon">
                    <i className="material-icons">menu</i>
                </label>
                <label className="Headerlogo" skatch-tooltip="Skatch"><a href="javascript:void(0)">Skatch</a></label>
            </header>
                <div className="leftHeaderMenuOptions">
                    <ul>
                        <li className="SkatchGithubRepo"><a href="https://github.com/XSarthakJain/skatch.github.io" ><i className="fa fa-github"></i></a></li>
                        <li><a href="html/gettingstarted.html">Getting Started</a></li>
                        <li><a href="html/alert.html">Alert</a></li>
                        <li><a href="html/badges.html">Badge</a></li>
                        <li><a href="html/button.html">Button</a></li>
                        <li><a href="html/cards.html">Card</a></li>
                        <li><a href="html/footer.html">Footer</a></li>
                        <li><a href="html/header.html">Header</a></li>
                        <li><a href="html/popup.html">PopUp</a></li>
                        <li><a href="html/toast.html">Toast</a></li>
                        <li><a href="html/tooltips.html">Tooltips</a></li>
                        <li><a href="html/form.html">Form</a></li>
                    </ul>
                </div>
            {/* <!-- End Header --> */}
        </React.Fragment>
    );
}

export default Header;