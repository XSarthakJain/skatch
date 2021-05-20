import React from 'react';
import Raect from 'react';
import './css/commonpage.css';
import DarkleftSideHeader from './images/DarkleftSideHeader.png';
import LightleftSideHeader from './images/LightleftSideHeader.png';

function NavBar(){
    return (
        <React.Fragment>
        <br/><br/><br/><br/>
        <section class="outerWrapper">
        <h1 class="componentTitle">Header</h1>
        <p class="componentDescription"></p>
        <br/>
        <div>
            <p class="componentSubTitle">Header</p><br/>    
            <nav class="SkatchDark">
                <label class="Headerlogo">Skatch</label>
                <ul class="menuItems">
                    <li><a href="#" class="HeaderMenuactive">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
                <label id="HeaderMenuicon">
                <i class="material-icons">menu</i>
                </label>
            </nav>
            <br/><br/>

            <pre class="language-html"><code class="language-html">
            &lt;xmp class="codeSnippets"&gt; {"\n"}
            &lt;nav class="SkatchDark"&gt; {"\n"}
                &lt;label class="Headerlogo"&gt; {"\n"}Skatch&lt;/label&gt; {"\n"}
                &lt;ul class="menuItems"&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#" class="HeaderMenuactive"&gt; {"\n"}Home&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}About Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Contact Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Privacy Policy&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Terms & Conditions&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;/ul&gt; {"\n"}
                &lt;label id="HeaderMenuicon"&gt; {"\n"}
                &lt;i class="material-icons"&gt; {"\n"}menu&lt;/i&gt; {"\n"}
                &lt;/label&gt; {"\n"}
            &lt;/nav&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>

            <br/><br/>  

            <nav class="SkatchLight">
                <label class="Headerlogo">Skatch</label>
                <ul class="menuItems">
                    <li><a href="#" class="HeaderMenuactive">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
                <label id="HeaderMenuicon">
                <i class="material-icons">menu</i>
                </label>
            </nav>
        <br/><br/>
        
        <pre class="language-html"><code class="language-html">
        &lt;xmp class="codeSnippets"&gt; {"\n"}
        &lt;nav class="SkatchLight"&gt; {"\n"}
            &lt;label class="Headerlogo"&gt; {"\n"}Skatch&lt;/label&gt; {"\n"}
            &lt;ul class="menuItems"&gt; {"\n"}
                &lt;li&gt; {"\n"}&lt;a href="#" class="HeaderMenuactive"&gt; {"\n"}Home&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}About Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Contact Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Privacy Policy&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Terms & Conditions&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
            &lt;/ul&gt; {"\n"}
            &lt;label id="HeaderMenuicon"&gt; {"\n"}
            &lt;i class="material-icons"&gt; {"\n"}menu&lt;/i&gt; {"\n"}
            &lt;/label&gt; {"\n"}
        &lt;/nav&gt; {"\n"}
        &lt;/xmp&gt; {"\n"}
        </code></pre>

        </div>

        <div>
        <p class="componentSubTitle">Left Side appear Header</p><br/>
        <img src={LightleftSideHeader}/><br/><br/>

        <pre class="language-html"><code class="language-html">
        &lt;xmp &gt;{"\n"}
        &lt;header class="SkatchLight leftHeader" &gt;{"\n"}
        &lt;label id="LeftHeaderMenuicon" &gt;{"\n"}
        &lt;i class="material-icons"&gt;menu&lt;/i &gt;{"\n"}
        &lt;/label &gt;{"\n"}
        &lt;label class="Headerlogo"&gt;Skatch&lt;/label &gt;{"\n"}
        &lt;/header &gt;{"\n"}
        &lt;div class="leftHeaderMenuOptions" &gt;{"\n"}
        &lt;ul &gt;{"\n"}
            &lt;li &gt; &lt;a href="#"&gt;Servic &gt; &lt;&lt;/a&gt;&lt;/li &&gt;t;{"\n"}
            &lt;li &gt; &lt;a href="#"&gt;AboutUs &lt;/a&gt;&lt;/li &gt;{"\n"}
            &lt;li &gt; &lt;a href="#"&gt;Contact Us&lt;/a&gt;&lt;/li &gt;{"\n"}
            &lt;li &gt; &lt;a href="#"&gt;Terms & Conditions&lt;/a&gt;&lt;/li &gt;{"\n"}
            &lt;li &gt; &lt;a href="#"&gt;Privacy Policy&lt;/a&gt;&lt;/li &gt;{"\n"}
        &lt;/ul &gt;{"\n"}
        &lt;/div &gt;{"\n"}
        &lt;/xmp &gt;{"\n"}
        </code></pre>

    <br/>

    <img src={DarkleftSideHeader}/><br/><br/>

    <pre class="language-html"><code class="language-html">
    &lt;xmp class="codeSnippets"&gt; {"\n"}
            &lt;header class="SkatchLight leftHeader"&gt; {"\n"}
                &lt;label id="LeftHeaderMenuicon"&gt; {"\n"}
                    &lt;i class="material-icons"&gt; {"\n"}menu&lt;/i&gt; {"\n"}
                &lt;/label&gt; {"\n"}
                &lt;label class="Headerlogo"&gt; {"\n"}Skatch&lt;/label&gt; {"\n"}
            &lt;/header&gt; {"\n"}
                &lt;div class="leftHeaderMenuOptions"&gt; {"\n"}
                    &lt;ul&gt; {"\n"}
                        &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Services&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                        &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}AboutUs&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                        &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Contact Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                        &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Terms & Conditions&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                        &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Privacy Policy&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;/ul&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
    </code></pre>
                    
            <br/>
            <img src={DarkleftSideHeader}/><br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp class="codeSnippets"&gt; {"\n"}
            &lt;header class="SkatchDark leftHeader"&gt; {"\n"}
            &lt;label id="LeftHeaderMenuicon"&gt; {"\n"}
                &lt;i class="material-icons"&gt; {"\n"}menu&lt;/i&gt; {"\n"}
            &lt;/label&gt; {"\n"}
            &lt;label class="Headerlogo"&gt; {"\n"}Skatch&lt;/label&gt; {"\n"}
            &lt;/header&gt; {"\n"}
            &lt;div class="leftHeaderMenuOptions"&gt; {"\n"}
                &lt;ul&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Services&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}AboutUs&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Contact Us&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Terms & Conditions&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                    &lt;li&gt; {"\n"}&lt;a href="#"&gt; {"\n"}Privacy Policy&lt;/a&gt; {"\n"}&lt;/li&gt; {"\n"}
                &lt;/ul&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>


        </div></section>
        </React.Fragment>
    );
}

export default NavBar;