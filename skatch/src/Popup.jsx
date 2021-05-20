import React from 'react';
import './css/commonpage.css';
function Popup(){
    return (
        <React.Fragment>
    <br/><br/><br/><br/>
    <section className="outerWrapper">
        <h1 className="componentTitle">PopUp</h1>
        <p className="componentDescription">Use a modal for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger.</p>
        <br/>
        <div>
            <p className="componentSubTitle">Small Popup</p>
            <p>use className="popupsmall" for small Popup</p><br/>
            {/* <!-- PopUp Trigger --> */}
            <div className="">
                <button className="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonRed" popup-target = "popUp1">
                  Small Popup
                </button>
            </div>

            <div className="Skatchpopup PopupCenter popupsmall" id="popUp1" >
                <div>
                    <i className="material-icons dismiss-popup-btn SkatchCloseIcon"><span>close</span></i>
                </div>
                <div className="SkatchPopupTitleicon">
                    <i className="material-icons">check</i>
                </div>
                <div className="SkatchPopuptitleText">
                  Success!!
                </div>
                <div className="SkatchPopupdescription">
                  Lorem ipsum dolor sit 
                </div>
                <div className="SkatchPopupdismiss-btn">
                  <button className="dismiss-popup-btn">
                    Dismiss
                  </button>
                </div>
              </div>
            <br/><br/>

            <pre className="language-html"><code className="language-html">
            &lt;xmp classNameName="codeSnippets"&gt; {"\n"}
            {/* &lt;!-- PopUp Trigger --&gt; {"\n"} */}
            &lt;div classNameName=""&gt; {"\n"}
                &lt;button classNameName="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonRed" popup-target = "popUp1"&gt; {"\n"}
                Small Popup
                &lt;/button&gt; {"\n"}
            &lt;/div&gt; {"\n"}

            &lt;div classNameName="Skatchpopup PopupCenter popupsmall" id="popUp1"&gt; {"\n"}
            &lt;div&gt; {"\n"}
                &lt;i classNameName="material-icons dismiss-popup-btn SkatchCloseIcon"&gt; {"\n"}&lt;span&gt; {"\n"}close&lt;/span&gt; {"\n"}&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupTitleicon"&gt; {"\n"}
                &lt;i classNameName="material-icons"&gt; {"\n"}check&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopuptitleText"&gt; {"\n"}
            Success!!
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdescription"&gt; {"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdismiss-btn"&gt; {"\n"}
            &lt;button classNameName="dismiss-popup-btn"&gt; {"\n"}
                Dismiss
            &lt;/button&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>

            </div>

        <br/>
        <div>
            <p className="componentSubTitle">Medium Popup</p>
            <p>use className="popupmedium" for medium Popup</p><br/>
            {/* <!-- PopUp Trigger --> */}
            <div className="">
                <button className="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonBlue" popup-target = "popUp2">
                  Medium Popup
                </button>
              </div>

            <div className="Skatchpopup PopupCenter popupmedium" id="popUp2">
                <div>
                    <i className="material-icons dismiss-popup-btn SkatchCloseIcon"><span>close</span></i>
                </div>
                <div className="SkatchPopupTitleicon">
                    <i className="material-icons">check</i>
                </div>
                <div className="SkatchPopuptitleText">
                  Success!!
                </div>
                <div className="SkatchPopupdescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
                </div>
                <div className="SkatchPopupdismiss-btn">
                  <button className="dismiss-popup-btn">
                    Dismiss
                  </button>
                </div>
            </div>
            <br/><br/>
        
        <pre className="language-html"><code className="language-html">
        &lt;xmp classNameName="codeSnippets"&gt; {"\n"}
        &lt;!-- PopUp Trigger --&gt; {"\n"}
        &lt;div classNameName=""&gt; {"\n"}
            &lt;button classNameName="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonBlue" popup-target = "popUp2"&gt; {"\n"}
            Medium Popup
            &lt;/button&gt; {"\n"}
        &lt;/div&gt; {"\n"}

        &lt;div classNameName="Skatchpopup PopupCenter popupmedium" id="popUp2"&gt; {"\n"}
            &lt;div&gt; {"\n"}
                &lt;i classNameName="material-icons dismiss-popup-btn SkatchCloseIcon"&gt; {"\n"}&lt;span&gt; {"\n"}close&lt;/span&gt; {"\n"}&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupTitleicon"&gt; {"\n"}
                &lt;i classNameName="material-icons"&gt; {"\n"}check&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopuptitleText"&gt; {"\n"}
            Success!!
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdescription"&gt; {"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdismiss-btn"&gt; {"\n"}
            &lt;button classNameName="dismiss-popup-btn"&gt; {"\n"}
                Dismiss
            &lt;/button&gt; {"\n"}
            &lt;/div&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;/xmp&gt; {"\n"}
        </code></pre>

        </div>

        <br/>
        <div>
            <p className="componentSubTitle">Large Popup</p>
            <p>use className="popuplarge" for large Popup</p><br/>
            {/* <!-- PopUp Trigger --> */}
            <div className="">
                <button className="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonGreen" popup-target = "popUp3">
                large Popup
                </button>
            </div>

            <div className="Skatchpopup PopupCenter popuplarge" id="popUp3">
                <div>
                    <i className="material-icons dismiss-popup-btn SkatchCloseIcon"><span>close</span></i>
                </div>
                <div className="SkatchPopupTitleicon">
                    <i className="material-icons">check</i>
                </div>
                <div className="SkatchPopuptitleText">
                Success!!
                </div>
                <div className="SkatchPopupdescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
                </div>
                <div className="SkatchPopupdismiss-btn">
                <button className="dismiss-popup-btn">
                    Dismiss
                </button>
                </div>
            </div>
            <br/><br/>

        <pre className="language-html"><code className="language-html">
        &lt;xmp classNameName="codeSnippets"&gt; {"\n"}
        &lt;!-- PopUp Trigger --&gt; {"\n"}
        &lt;div classNameName=""&gt; {"\n"}
            &lt;button classNameName="open-popup-btn SkatchBtn SkatchElipseBtn SkatchButtonGreen" popup-target = "popUp3"&gt; {"\n"}
            large Popup
            &lt;/button&gt; {"\n"}
        &lt;/div&gt; {"\n"}

        &lt;div classNameName="Skatchpopup PopupCenter popuplarge" id="popUp3"&gt; {"\n"}
            &lt;div&gt; {"\n"}
                &lt;i classNameName="material-icons dismiss-popup-btn SkatchCloseIcon"&gt; {"\n"}&lt;span&gt; {"\n"}close&lt;/span&gt; {"\n"}&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupTitleicon"&gt; {"\n"}
                &lt;i classNameName="material-icons"&gt; {"\n"}check&lt;/i&gt; {"\n"}
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopuptitleText"&gt; {"\n"}
            Success!!
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdescription"&gt; {"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
            &lt;/div&gt; {"\n"}
            &lt;div classNameName="SkatchPopupdismiss-btn"&gt; {"\n"}
            &lt;button classNameName="dismiss-popup-btn"&gt; {"\n"}
                Dismiss
            &lt;/button&gt; {"\n"}
            &lt;/div&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;/xmp&gt; {"\n"}
        </code></pre>
        
        </div>
            </section>
        </React.Fragment>
    );
}

export default Popup;