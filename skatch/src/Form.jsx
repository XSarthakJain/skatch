import React from 'react';
import './css/commonpage.css';

function Form(){
    return (
        <React.Fragment>
            
            <br/><br/><br/><br/>

            <section class="outerWrapper">
                <h1 class="componentTitle">Forms</h1>
                <p class="componentDescription"></p>
                <br/>
                <div>
                    <div>
                        <p class="componentSubTitle">Input type="text"</p>
                        <small>use class="SkatchForm"</small>
                        <br/>
                        <form>
                            <input type="text" class="SkatchForm" placeholder="name here"/>
                        </form><br/>
            
            <pre className="language-html"><code className="language-html">
            &lt;xmp className = "codeSnippets"&gt; {"\n"}
            &lt;form&gt; {"\n"}
            &lt;input type="text" className="SkatchForm" placeholder="name here"&gt; {"\n"}
            &lt;/form&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
                        
            <form>
                <div class="SkatchInputTextIcon">
                    <input type="text" class="SkatchForm" placeholder="name here"/>
                    <i class="material-icons">person</i>
                </div>
                <br/>
                <div class="SkatchInputTextIcon SkatchInputTextIconBg">
                    <input type="text" class="SkatchForm" placeholder="name here"/>
                    <i class="material-icons">person</i>
                </div>
                <br/>

                <pre className="language-html"><code className="language-html">
                &lt;xmp className="codeSnippets"&gt; {"\n"}
                &lt;div className="SkatchInputTextIcon"&gt; {"\n"}
                &lt;input type="text" className="SkatchForm" placeholder="name here"&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}person&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}


                &lt;div className="SkatchInputTextIcon SkatchInputTextIconBg"&gt; {"\n"}
                &lt;input type="text" className="SkatchForm" placeholder="name here"&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}person&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/xmp&gt; {"\n"}
                </code></pre>
                </form><br/>
                +

                
                </div>
                <br/>
                
                <div>
                    <p class="componentSubTitle">Input type="email"</p>
                    <small>use class="SkatchForm"</small>
                    <br/>
                    <form>
                        <input type="text" class="SkatchForm" placeholder="Email here"/>
                    </form><br/>

                <pre className="language-html"><code className="language-html">
                &lt;xmp className = "codeSnippets"&gt; {"\n"}
                &lt;form&gt; {"\n"}
                &lt;input type="email" className="SkatchForm" placeholder="email here"&gt; {"\n"}
                &lt;/form&gt; {"\n"}
                &lt;/xmp&gt; {"\n"}
                </code></pre>

                <br/><br/>
                <form>
                <div class="SkatchInputTextIcon">
                    <input type="email" class="SkatchForm" placeholder="Email here"/>
                    <i class="material-icons">email</i>
                </div>
                <br/>
                <div class="SkatchInputTextIcon SkatchInputTextIconBg">
                    <input type="email" class="SkatchForm" placeholder="Email here"/>
                    <i class="material-icons">email</i>
                </div>
                <br/>

                <pre className="language-html"><code className="language-html">
                &lt;xmp className="codeSnippets"&gt; {"\n"}
                &lt;div className="SkatchInputTextIcon"&gt; {"\n"}
                &lt;input type="email" className="SkatchForm" placeholder="Email here"&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}email&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}


                &lt;div className="SkatchInputTextIcon SkatchInputTextIconBg"&gt; {"\n"}
                &lt;input type="email" className="SkatchForm" placeholder="Email here"&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}email&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;/xmp&gt; {"\n"}
                </code></pre>
                
                </form>

                <br/>
                    </div>
                    <strong>Note: It will same follow with other input types in the same way</strong>
                    <br/>
                    
                </div>
            </section>
        </React.Fragment>
    );
}

export default Form;
