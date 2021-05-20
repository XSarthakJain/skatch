import React from 'react';
import './css/commonpage.css';
import card1 from './images/card1.jpeg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';

function Card(){
    return (
        <React.Fragment>
<br/><br/><br/><br/>

<section class="outerWrapper">
    <h1 class="componentTitle">Cards</h1>
    <p class="componentDescription"></p>
    <br/>
    <div>
        <p class="componentSubTitle">Card 1</p>
        <div>
            <div class="SkatchOuterCard">
            <div class="Skatchcard">
                <div class="Skatchcard-image">
                    <img src={card1} class="Skatchcard-image"/>
                </div>
                <div class="Skatchcard-text">
                    <span class="Skatchcarddate">4 days left</span>
                    <h2>Nike Luke501</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.</p>
                </div>
                <div class="Skatchcard-button">
                    <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton">Order now</button>
                </div>
            </div>
            </div>

            <div class="SkatchOuterCard">
            <div class="Skatchcard">
                <div class="Skatchcard-image">
                    <img src={card2} class="Skatchcard-image"/>
                </div>
                <div class="Skatchcard-text">
                    <span class="Skatchcarddate">4 days 5 nights</span>
                    <h2>GOA</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.</p>
                </div>
                <div class="Skatchcard-button">
                    <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedYellowButton">Book now</button>
                </div>
            </div>
            </div>

            <div class="SkatchOuterCard">
                <div class="Skatchcard">
                    <div class="Skatchcard-image">
                        <img src={card3} class="Skatchcard-image"/>
                    </div>
                    <div class="Skatchcard-text">
                        <span class="Skatchcarddate">5 piece</span>
                        <h2>Samosa</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.</p>
                    </div>
                    <div class="Skatchcard-button">
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton">Pay</button>
                    </div>
                </div>
            </div>

            <div class="SkatchOuterCard">
                <div class="Skatchcard">
                    <div class="Skatchcard-image">
                        <img src={card4} class="Skatchcard-image"/>
                    </div>
                    <div class="Skatchcard-text">
                        <span class="Skatchcarddate">4 days 5 nights</span>
                        <h2>Europe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.</p>
                    </div>
                    <div class="Skatchcard-button">
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton">Book now</button>
                    </div>
                </div>
            </div>

            <br/><br/>

            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;div className="SkatchOuterCard"&gt; {"\n"}
                &lt;div className="Skatchcard"&gt; {"\n"}
                    &lt;div className="Skatchcard-image"&gt; {"\n"}
                        &lt;img src="../images/card1.jpeg" className="Skatchcard-image"&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="Skatchcard-text"&gt; {"\n"}
                        &lt;span className="Skatchcarddate"&gt; {"\n"}4 days left&lt;/span&gt; {"\n"}
                        &lt;h2&gt; {"\n"}Nike Luke501&lt;/h2&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.&lt;/p&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="Skatchcard-button"&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchOuterCard"&gt; {"\n"}
                &lt;div className="Skatchcard"&gt; {"\n"}
                    &lt;div className="Skatchcard-image"&gt; {"\n"}
                        &lt;img src="../images/card2.jpg" className="Skatchcard-image"&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="Skatchcard-text"&gt; {"\n"}
                        &lt;span className="Skatchcarddate"&gt; {"\n"}4 days 5 nights&lt;/span&gt; {"\n"}
                        &lt;h2&gt; {"\n"}GOA&lt;/h2&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.&lt;/p&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="Skatchcard-button"&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedYellowButton"&gt; {"\n"}Book now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchOuterCard"&gt; {"\n"}
                    &lt;div className="Skatchcard"&gt; {"\n"}
                        &lt;div className="Skatchcard-image"&gt; {"\n"}
                            &lt;img src="../images/card3.jpg" className="Skatchcard-image"&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                        &lt;div className="Skatchcard-text"&gt; {"\n"}
                            &lt;span className="Skatchcarddate"&gt; {"\n"}5 piece&lt;/span&gt; {"\n"}
                            &lt;h2&gt; {"\n"}Samsa&lt;/h2&gt; {"\n"}
                            &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.&lt;/p&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                        &lt;div className="Skatchcard-button"&gt; {"\n"}
                            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton"&gt; {"\n"}Pay&lt;/button&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchOuterCard"&gt; {"\n"}
                    &lt;div className="Skatchcard"&gt; {"\n"}
                        &lt;div className="Skatchcard-image"&gt; {"\n"}
                            &lt;img src="../images/card4.jpg" className="Skatchcard-image"&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                        &lt;div className="Skatchcard-text"&gt; {"\n"}
                            &lt;span className="Skatchcarddate"&gt; {"\n"}4 days 5 nights&lt;/span&gt; {"\n"}
                            &lt;h2&gt; {"\n"}Europe&lt;/h2&gt; {"\n"}
                            &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae alias cumque dolorem, impedit laudantium quidem distinctio minus tenetur fuga labore veniam dolore dolores ipsa ab repudiandae assumenda vitae provident pariatur.&lt;/p&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                        &lt;div className="Skatchcard-button"&gt; {"\n"}
                            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton"&gt; {"\n"}Book now&lt;/button&gt; {"\n"}
                        &lt;/div&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/xmp&gt; {"\n"}
                </code></pre>
            
            </div>
            <br/><br/>
            {/* <!-- Second Card here --> */}
            <div>
                <p class="componentSubTitle">Card 2</p>
                <div class="SkatchCard2 SkatchCard2Yellow">
                    <div class="SkatchCard2Title">
                        <h2>01</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedYellowButton">Order now</button>
                    </div>
                </div>
                
                <div class="SkatchCard2 SkatchCard2red">
                    <div class="SkatchCard2Title">
                        <h2>02</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton">Order now</button>
                    </div>
                </div>

                <div class="SkatchCard2 SkatchCard2Green">
                    <div class="SkatchCard2Title">
                        <h2>03</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton">Order now</button>
                    </div>
                </div>
                
                <div class="SkatchCard2 SkatchCard2Blue">
                    <div class="SkatchCard2Title">
                        <h2>04</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton">Order now</button>
                    </div>
                </div>

                <div class="SkatchCard2 SkatchCard2Gray">
                    <div class="SkatchCard2Title">
                        <h2>05</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGrayButton">Order now</button>
                    </div>
                </div>

                <pre class="language-html"><code class="language-html">
                &lt;xmp className="codeSnippets"&gt; {"\n"}
                &lt;div className="SkatchCard2 SkatchCard2Yellow"&gt; {"\n"}
                    &lt;div className="SkatchCard2Title"&gt; {"\n"}
                        &lt;h2&gt; {"\n"}01&lt;/h2&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="SkatchCard2Content"&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!&lt;/p&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedYellowButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchCard2 SkatchCard2red"&gt; {"\n"}
                    &lt;div className="SkatchCard2Title"&gt; {"\n"}
                        &lt;h2&gt; {"\n"}02&lt;/h2&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="SkatchCard2Content"&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!&lt;/p&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchCard2 SkatchCard2Green"&gt; {"\n"}
                    &lt;div className="SkatchCard2Title"&gt; {"\n"}
                        &lt;h2&gt; {"\n"}03&lt;/h2&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="SkatchCard2Content"&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!&lt;/p&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchCard2 SkatchCard2Blue"&gt; {"\n"}
                    &lt;div className="SkatchCard2Title"&gt; {"\n"}
                        &lt;h2&gt; {"\n"}04&lt;/h2&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="SkatchCard2Content"&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!&lt;/p&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}

                &lt;div className="SkatchCard2 SkatchCard2Gray"&gt; {"\n"}
                    &lt;div className="SkatchCard2Title"&gt; {"\n"}
                        &lt;h2&gt; {"\n"}05&lt;/h2&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                    &lt;div className="SkatchCard2Content"&gt; {"\n"}
                        &lt;p&gt; {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!&lt;/p&gt; {"\n"}
                        &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGrayButton"&gt; {"\n"}Order now&lt;/button&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/xmp&gt; {"\n"}
                </code></pre>

                </div>
            </div>
            
            <br/><br/>
            {/* <!-- Second Card here --> */}
            <div>
                <p class="componentSubTitle">Card 2</p>
                <div class="SkatchCard2 SkatchCard2Yellow">
                    <div class="SkatchCard2Title">
                        <h2>01</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedYellowButton">Order now</button>
                    </div>
                </div>
                
                <div class="SkatchCard2 SkatchCard2red">
                    <div class="SkatchCard2Title">
                        <h2>02</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton">Order now</button>
                    </div>
                </div>

                <div class="SkatchCard2 SkatchCard2Green">
                    <div class="SkatchCard2Title">
                        <h2>03</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton">Order now</button>
                    </div>
                </div>
                
                <div class="SkatchCard2 SkatchCard2Blue">
                    <div class="SkatchCard2Title">
                        <h2>04</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton">Order now</button>
                    </div>
                </div>

                <div class="SkatchCard2 SkatchCard2Gray">
                    <div class="SkatchCard2Title">
                        <h2>05</h2>
                    </div>
                    <div class="SkatchCard2Content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam ipsam reiciendis quasi provident ipsum, nisi voluptates sunt cupiditate. Sit commodi alias aliquam culpa officiis impedit ad quod reprehenderit dolore!</p>
                        <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGrayButton">Order now</button>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Card;