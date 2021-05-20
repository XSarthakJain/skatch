import React from 'react';
import './css/commonpage.css';

function Toast(){
    return (
        <React.Fragment>
            <br/><br/><br/><br/>
    <section class="outerWrapper">
        <h1 class="componentTitle">Notification</h1>
        <p class="componentDescription"></p>
        <br/>
        <div>
            <p class="componentSubTitle">Notification</p>
            <div class="SkatchNotification SkatchNotificationRed" id="SkatchNotification">
                <span><i class="material-icons SkatchNotificationIcon">error</i></span><span class="SkatchNotificationMessage">Error Message</span><a href="#">Action</a>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification">Click Me</button>

            <div class="SkatchNotification SkatchNotificationGreen" id="SkatchNotification1">
                <span><i class="material-icons SkatchNotificationIcon">check_circle</i></span><span class="SkatchNotificationMessage">Success Message</span><a href="#">Action</a>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonBlue" notification-target="SkatchNotification1">Click Me</button>

            <div class="SkatchNotification SkatchNotificationBlue" id="SkatchNotification2">
                <span><i class="material-icons SkatchNotificationIcon">info</i></span><span class="SkatchNotificationMessage">Info Message</span><a href="#">Action</a>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGreen" notification-target="SkatchNotification2">Click Me</button>

            <div class="SkatchNotification SkatchNotificationYellow" id="SkatchNotification3">
                <span><i class="material-icons SkatchNotificationIcon">warning</i></span><span class="SkatchNotificationMessage">Warning Message</span><a href="#">Action</a>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGray" notification-target="SkatchNotification3">Click Me</button>

            <div class="SkatchNotification SkatchNotificationGray" id="SkatchNotification4">
                <span><i class="material-icons SkatchNotificationIcon">error</i></span><span class="SkatchNotificationMessage">Error Message</span><a href="#">Action</a>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification4">Click Me</button>
            <br/><br/>

        <pre className="language-html"><code className="language-html">
        &lt;xmp className="codeSnippets"&gt; {"\n"}
        &lt;div className="SkatchNotification SkatchNotificationRed" id="SkatchNotification"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons SkatchNotificationIcon"&gt; {"\n"}
                    error
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotificationMessage"&gt; {"\n"}
                Error Message
            &lt;/span&gt; {"\n"}
            &lt;a href="#"&gt; {"\n"}
                Action
            &lt;/a&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification SkatchNotificationGreen" id="SkatchNotification1"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons SkatchNotificationIcon"&gt; {"\n"}
                    check_circle
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotificationMessage"&gt; {"\n"}
                Success Message
            &lt;/span&gt; {"\n"}
            &lt;a href="#"&gt; {"\n"}
                Action
            &lt;/a&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonBlue" notification-target="SkatchNotification1"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification SkatchNotificationBlue" id="SkatchNotification2"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons SkatchNotificationIcon"&gt; {"\n"}
                    info
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotificationMessage"&gt; {"\n"}
                Info Message
            &lt;/span&gt; {"\n"}
            &lt;a href="#"&gt; {"\n"}
                Action
            &lt;/a&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGreen" notification-target="SkatchNotification2"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification SkatchNotificationYellow" id="SkatchNotification3"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons SkatchNotificationIcon"&gt; {"\n"}
                    warning
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotificationMessage"&gt; {"\n"}
                Warning Message
            &lt;/span&gt; {"\n"}
            &lt;a href="#"&gt; {"\n"}
                Action
            &lt;/a&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGray" notification-target="SkatchNotification3"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification SkatchNotificationGray" id="SkatchNotification4"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons SkatchNotificationIcon"&gt; {"\n"}
                    error
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotificationMessage"&gt; {"\n"}
                Error Message
            &lt;/span&gt; {"\n"}
            &lt;a href="#"&gt; {"\n"}
                Action
            &lt;/a&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification4"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}
        &lt;/xmp&gt; {"\n"}
        </code></pre>

        </div>
        <br/>
        <div>
            <p class="componentSubTitle">Notification 2</p>
            <div class="SkatchNotification2 SkatchNotification2Red" id="SkatchNotification5">
                <span>
                    <i class="material-icons">
                        error
                    </i>
                </span>
                <span class="SkatchNotification2Content">
                    <p>The file <strong>Banchmark2</strong> deleted</p>
                </span>
                <span>
                    <a href="#">Undo</a>
                </span>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification5">
                Click Me
            </button>

            <div class="SkatchNotification2 SkatchNotification2Green" id="SkatchNotification6">
                <span>
                    <i class="material-icons">
                        check
                    </i>
                </span>
                <span class="SkatchNotification2Content">
                    <p>The file <strong>Banchmark2</strong> has been saved</p> 
                </span>
                <span>
                    <a href="#">Undo</a>
                </span>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonBlue" notification-target="SkatchNotification6">
                Click Me
            </button>

            <div class="SkatchNotification2 SkatchNotification2Blue" id="SkatchNotification7">
                <span>
                    <i class="material-icons">
                        info
                    </i>
                </span>
                <span class="SkatchNotification2Content">
                    <p>Your pic linked by <strong>25 people</strong></p>
                </span>
                <span>
                    <a href="#">Undo</a>
                </span>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGreen" notification-target="SkatchNotification7">
                Click Me
            </button>

            <div class="SkatchNotification2 SkatchNotification2Yellow" id="SkatchNotification8">
                <span>
                    <i class="material-icons">
                        warning
                    </i>
                </span>
                <span class="SkatchNotification2Content">
                    <p>Once you click yes you can't get back</p>
                </span>
                <span>
                    <a href="#">Undo</a>
                </span>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGray" notification-target="SkatchNotification8">
                Click Me
            </button>

            <div class="SkatchNotification2 SkatchNotification2Gray" id="SkatchNotification9">
                <span>
                    <i class="material-icons">
                        info
                    </i>
                </span>
                <span class="SkatchNotification2Content">
                    <p>Your pic linked by <strong>25 people</strong></p>
                </span>
                <span>
                    <a href="#">Undo</a>
                </span>
            </div>
            <button class="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification9">
                Click Me
            </button>
            <br/><br/>
        <pre className="language-html"><code className="language-html">
        &lt;xmp className="codeSnippets"&gt; {"\n"}
        &lt;div className="SkatchNotification2 SkatchNotification2Red" id="SkatchNotification5"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}
                    error
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotification2Content"&gt; {"\n"}
                &lt;p&gt; {"\n"}The file &lt;strong&gt; {"\n"}Banchmark2&lt;/strong&gt; {"\n"} deleted&lt;/p&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;a href="#"&gt; {"\n"}Undo&lt;/a&gt; {"\n"}
            &lt;/span&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification5"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification2 SkatchNotification2Green" id="SkatchNotification6"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}
                    check
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotification2Content"&gt; {"\n"}
                &lt;p&gt; {"\n"}The file &lt;strong&gt; {"\n"}Banchmark2&lt;/strong&gt; {"\n"} has been saved&lt;/p&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;a href="#"&gt; {"\n"}Undo&lt;/a&gt; {"\n"}
            &lt;/span&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonBlue" notification-target="SkatchNotification6"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification2 SkatchNotification2Blue" id="SkatchNotification7"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}
                    info
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotification2Content"&gt; {"\n"}
                &lt;p&gt; {"\n"}Your pic linked by &lt;strong&gt; {"\n"}25 people&lt;/strong&gt; {"\n"}&lt;/p&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;a href="#"&gt; {"\n"}Undo&lt;/a&gt; {"\n"}
            &lt;/span&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGreen" notification-target="SkatchNotification7"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification2 SkatchNotification2Yellow" id="SkatchNotification8"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}
                    warning
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotification2Content"&gt; {"\n"}
                &lt;p&gt; {"\n"}Once you click yes you can't get back&lt;/p&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;a href="#"&gt; {"\n"}Undo&lt;/a&gt; {"\n"}
            &lt;/span&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonGray" notification-target="SkatchNotification8"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}

        &lt;div className="SkatchNotification2 SkatchNotification2Gray" id="SkatchNotification9"&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;i className="material-icons"&gt; {"\n"}
                    info
                &lt;/i&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span className="SkatchNotification2Content"&gt; {"\n"}
                &lt;p&gt; {"\n"}Your pic linked by &lt;strong&gt; {"\n"}25 people&lt;/strong&gt; {"\n"}&lt;/p&gt; {"\n"}
            &lt;/span&gt; {"\n"}
            &lt;span&gt; {"\n"}
                &lt;a href="#"&gt; {"\n"}Undo&lt;/a&gt; {"\n"}
            &lt;/span&gt; {"\n"}
        &lt;/div&gt; {"\n"}
        &lt;button className="SkatchNotificationTriggre SkatchBtn SkatchElipseBtn SkatchButtonRed" notification-target="SkatchNotification9"&gt; {"\n"}
            Click Me
        &lt;/button&gt; {"\n"}
        &lt;/xmp&gt; {"\n"}
        </code></pre>
                    

                </div>
            </section>

        </React.Fragment>
    );
}
export default Toast;