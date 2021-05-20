import React from 'react';
import './css/commonpage.css';

function Gettingstarted(){
    return (
        <React.Fragment>
            <br/><br/><br/><br/>
                <section className="outerWrapper">
                    <h1 className="componentTitle">Getting Started</h1><br/>
                    <br/>
                    <p className="componentSubTitle">CSS</p>
                    <pre className=" language-markup" tabindex="0" data-copy-state="copy">
                        <code  className=" language-markup">
                        &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/&gt;{'\n'}
                        &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/&gt;{'\n'}
                        &lt;link rel="StyleSheet"  href="https://cdn.jsdelivr.net/gh/xsarthakjain/skatch.github.io/dist/css/skatch.min.css"/&gt;{'\n'}
                    </code>
                    </pre>
                    <br/><br/>
                    <p className="componentSubTitle">JS</p>
                    <pre>
                        <code class="language-html">
                        &lt;script src="https://cdn.jsdelivr.net/gh/xsarthakjain/skatch.github.io/dist/js/skatch.min.js"&gt;&lt;/script&gt;{'\n'}
                        </code>
                    </pre>
                    <br/>
                    <div>
                        <br/>
                        <h2 className="componentSubTitle">Starter template</h2>
                        <pre class="language-html"><code class="language-html">
                       
                            &lt;html lang="en"&gt;{'\n'}
                            &lt;head&gt;{'\n'}
                            &lt;meta charset="UTF-8"/&gt;{'\n'}
                            &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"/&gt;{'\n'}
                            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;{'\n'}
                            &lt;title&gt;Skatch&lt;/title &gt;{'\n'}
                            &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/&gt;{'\n'}
                            &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/&gt;{'\n'}
                            &lt;link rel="StyleSheet"  href="https://cdn.jsdelivr.net/gh/xsarthakjain/skatch.github.io/dist/css/skatch.min.css"/&gt;{'\n'}
                            &lt;/head&gt;{'\n'}
                            &lt;body&gt;{'\n'}
                                &lt;h1&gt;Welcome to Skatch&lt;/h1&gt;{'\n'}
                            &lt;/body&gt;{'\n'}
                            &lt;script src="https://cdn.jsdelivr.net/gh/xsarthakjain/skatch.github.io/dist/js/skatch.min.js"&gt;&lt;/script&gt;{'\n'}
                            &lt;/html&gt;{'\n'}
                     
                        </code>
                        </pre>
                    </div>
                </section>
        </React.Fragment>
    );

    
}

export default Gettingstarted;