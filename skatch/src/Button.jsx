import React from 'react';
import './css/commonpage.css';

function Button(){
    return (
       <React.Fragment>

        <section class="outerWrapper">
                <h1 class="componentTitle">Button</h1>
                <p class="componentDescription"></p>
                <br/>
                <div>
                    <p class="componentSubTitle">Button Elipse</p>
                    <button class="SkatchBtn SkatchElipseBtn SkatchButtonRed">Button</button>
                    <button class="SkatchBtn SkatchElipseBtn SkatchButtonBlue">Button</button>
                    <button class="SkatchBtn SkatchElipseBtn SkatchButtonGreen">Button</button>
                    <button class="SkatchBtn SkatchElipseBtn SkatchButtonGray">Button</button>
                    <br/><br/>

            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchButtonRed"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchButtonBlue"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchButtonGreen"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchButtonGray"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>

            <p class="componentSubTitle">Button</p>
            <button class="SkatchBtn SkatchButtonRed">Button</button>
            <button class="SkatchBtn SkatchButtonBlue">Button</button>
            <button class="SkatchBtn SkatchButtonGreen">Button</button>
            <button class="SkatchBtn SkatchButtonGray">Button</button>
            <br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonRed"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonBlue"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonGreen"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonGray"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
            
            <p class="componentSubTitle">Button Rounded</p>
            <button class="SkatchBtn SkatchRoundBtn SkatchButtonRed ">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchButtonBlue">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchButtonGreen">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchButtonGray">Button</button>
            <br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchButtonRed "&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchButtonBlue"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchButtonGreen"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchButtonGray"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
                        
            <p class="componentSubTitle">Rounded Transparent Button</p>
            <button class="SkatchBtn SkatchRoundBtn SkatchTransparentRed">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchTransparentBlue">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchTransparentGreen">Button</button>
            <button class="SkatchBtn SkatchRoundBtn SkatchTransparentGray">Button</button>
            <br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchTransparentRed"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchTransparentBlue"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchTransparentGreen"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchRoundBtn SkatchTransparentGray"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>

            <p class="componentSubTitle">Transparent Button</p>
            <button class="SkatchBtn SkatchTransparentRed">Button</button>
            <button class="SkatchBtn SkatchTransparentBlue">Button</button>
            <button class="SkatchBtn SkatchTransparentGreen">Button</button>
            <button class="SkatchBtn SkatchTransparentGray">Button</button>
            <br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchTransparentRed"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchTransparentBlue"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchTransparentGreen"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchTransparentGray"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
                        
            <p class="componentSubTitle">Block Button</p>
            <button class="SkatchBtn SkatchButtonRed SkatchButtonBlock">Button</button><br/>
            <button class="SkatchBtn SkatchButtonBlue SkatchRoundBtn SkatchButtonBlock">Button</button><br/>
            <button class="SkatchBtn SkatchTransparentGreen SkatchButtonBlock">Button</button><br/>
            <button class="SkatchBtn SkatchElipseBtn SkatchButtonGray SkatchButtonBlock">Button</button>
            <br/><br/>
            
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonRed SkatchButtonBlock"&gt; {"\n"}Button&lt;/button&gt; {"\n"}&lt;br/&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchButtonBlue SkatchRoundBtn SkatchButtonBlock"&gt; {"\n"}Button&lt;/button&gt; {"\n"}&lt;br/&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchTransparentGreen SkatchButtonBlock"&gt; {"\n"}Button&lt;/button&gt; {"\n"}&lt;br/&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchButtonGray SkatchButtonBlock"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>

            <p class="componentSubTitle">Animated Button</p>
            <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton">Button</button>
            <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton">Button</button>
            <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton">Button</button>
            <button class="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGrayButton">Button</button>

            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGreenButton"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedRedButton"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedBlueButton"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;button className="SkatchBtn SkatchElipseBtn SkatchAnimatedButton SkatchAnimatedGrayButton"&gt; {"\n"}Button&lt;/button&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
            
            </div>
            </section>

        </React.Fragment>
    );
}

export default Button;