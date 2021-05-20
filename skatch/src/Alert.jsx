import React from 'react';
import './css/commonpage.css';


function Alert(){
    return(
        <React.Fragment>
                 <br/><br/><br/><br/>
    <section className="outerWrapper">
        <h1 className="componentTitle">Alerts</h1>
        <p className="componentDescription">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <br/>
        <div>
            <p className="componentSubTitle">Alert</p><br/>
            {/* <!-- Skatch Red --> */}
            <div className="SkatchAlert SkatchRed">
                <div className="AlertIcon">
                    <i className="material-icons">error</i>
                </div>
                <div className="AlertContent">
                    <span className="AlertTitle">Error Message</span><br/>
                    <span className="AlertDescription">lorem ipsum text here</span>
                </div>
                <div className="AlertClose" >
                    <i className="material-icons">close</i>
                </div>
            </div><br/>
            {/* <!-- Skatch Green --> */}
            <div className="SkatchAlert SkatchGreen" >
                <div className="AlertIcon">
                    <i className="material-icons">check_circle</i>
                </div>
                <div className="AlertContent">
                    <span className="AlertTitle">Success Message</span><br/>
                    <span className="AlertDescription">lorem ipsum text here</span>
                </div>
                <div className="AlertClose" >
                    <i className="material-icons">close</i>
                </div>
            </div>
            <br/>
            {/* <!-- Skatch Blue --> */}
            <div className="SkatchAlert SkatchBlue" >
                <div className="AlertIcon">
                    <i className="material-icons">info</i>
                </div>
                <div className="AlertContent">
                    <span className="AlertTitle">Info Message</span><br/>
                    <span className="AlertDescription">lorem ipsum text here</span>
                </div>
                <div className="AlertClose" >
                    <i className="material-icons">close</i>
                </div>
            </div>
            <br/>
            {/* <!-- Skatch Yellow --> */}
            <div className="SkatchAlert SkatchYellow" >
                <div className="AlertIcon">
                    <i className="material-icons">warning</i>
                </div>
                <div className="AlertContent">
                    <span className="AlertTitle">Warning Message</span><br/>
                    <span className="AlertDescription">lorem ipsum text here</span>
                </div>
                <div className="AlertClose" >
                    <i className="material-icons">close</i>
                </div>
            </div>
            <br/>
            {/* <!-- Skatch Gray --> */}
            <div className="SkatchAlert SkatchGray" >
                <div className="AlertIcon">
                    <i className="material-icons">error</i>
                </div>
                <div className="AlertContent">
                    <span className="AlertTitle">Error Message</span><br/>
                    <span className="AlertDescription">lorem ipsum text here</span>
                </div>
                <div className="AlertClose" >
                    <i className="material-icons">close</i>
                </div>
            </div>
            <br/><br/>
            </div></section>

            <pre className="language-html">
                <code className="language-html">
                &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;!-- Skatch Red --&gt; {"\n"}
            &lt;div className="SkatchAlert SkatchRed" &gt; {"\n"}
                &lt;div className="AlertIcon"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}error&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertContent"&gt; {"\n"}
                    &lt;span className="AlertTitle"&gt; {"\n"}Error Message&lt;/span&gt; {"\n"}&lt;br&gt; {"\n"}
                    &lt;span className="AlertDescription"&gt; {"\n"}lorem ipsum text here&lt;/span&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertClose" &gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}close&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}

            &lt;!-- Skatch Green --&gt; {"\n"}
            &lt;div className="SkatchAlert SkatchGreen" &gt; {"\n"}
                &lt;div className="AlertIcon"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}check_circle&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertContent"&gt; {"\n"}
                    &lt;span className="AlertTitle"&gt; {"\n"}Success Message&lt;/span&gt; {"\n"}&lt;br&gt; {"\n"}
                    &lt;span className="AlertDescription"&gt; {"\n"}lorem ipsum text here&lt;/span&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertClose" &gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}close&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}

            &lt;!-- Skatch Blue --&gt; {"\n"}
            &lt;div className="SkatchAlert SkatchBlue" &gt; {"\n"}
                &lt;div className="AlertIcon"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}info&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertContent"&gt; {"\n"}
                    &lt;span className="AlertTitle"&gt; {"\n"}Info Message&lt;/span&gt; {"\n"}&lt;br&gt; {"\n"}
                    &lt;span className="AlertDescription"&gt; {"\n"}lorem ipsum text here&lt;/span&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertClose" &gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}close&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}

            &lt;!-- Skatch Yellow --&gt; {"\n"}
            &lt;div className="SkatchAlert SkatchYellow" &gt; {"\n"}
                &lt;div className="AlertIcon"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}warning&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertContent"&gt; {"\n"}
                    &lt;span className="AlertTitle"&gt; {"\n"}Warning Message&lt;/span&gt; {"\n"}&lt;br&gt; {"\n"}
                    &lt;span className="AlertDescription"&gt; {"\n"}lorem ipsum text here&lt;/span&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertClose" &gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}close&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}

            &lt;!-- Skatch Gray --&gt; {"\n"}
            &lt;div className="SkatchAlert SkatchGray" &gt; {"\n"}
                &lt;div className="AlertIcon"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}error&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertContent"&gt; {"\n"}
                    &lt;span className="AlertTitle"&gt; {"\n"}Error Message&lt;/span&gt; {"\n"}&lt;br&gt; {"\n"}
                    &lt;span className="AlertDescription"&gt; {"\n"}lorem ipsum text here&lt;/span&gt; {"\n"}
                &lt;/div&gt; {"\n"}
                &lt;div className="AlertClose"&gt; {"\n"}
                    &lt;i className="material-icons"&gt; {"\n"}close&lt;/i&gt; {"\n"}
                &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}
                        &lt;/xmp&gt; {"\n"}
                    &lt;/div&gt; {"\n"}
                &lt;/section&gt; {"\n"}
                </code>
            </pre>
        </React.Fragment>
    );
}

export default Alert;