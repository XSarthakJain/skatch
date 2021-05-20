import React from 'react';
import './css/commonpage.css';

function Tooltip(){
    return (
        <React.Fragment>
            <br/><br/><br/><br/>
            <section className="outerWrapper">
                <h1 className="componentTitle">Tooltips</h1>
                <p className="componentDescription"></p>
                <br/>
                <div>
                    <p className="componentSubTitle">Tooltips</p>
                    <p>Write <strong>skatch-tooltip="Tooltip Content"</strong> in any element</p>
                    <br/>
                    <h2 skatch-tooltip="Tooltip Hover here">Hover here</h2>
                    <br/><br/>
                    <pre className="language-html"><code className="language-html">
                    <xmp>
                    &lt;h2 skatch-tooltip="Tooltip Hover here"&gt;Hover here&lt;/h2&gt;{"\n"}
                    </xmp>
                    </code></pre>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Tooltip;