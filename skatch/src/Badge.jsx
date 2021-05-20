import React from 'react';
import './css/commonpage.css';

function Badge(){
    return (
        <React.Fragment>
               <br/><br/><br/><br/>
                <section class="outerWrapper">
                    <h1 class="componentTitle">Badges</h1>
                    <p class="componentDescription">Badges can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background</p>
                    <br/>
                    <div>
                        <p class="componentSubTitle">Button with Badges</p><br/>
                        <button class="BadgeButton BadgeSkatchRedBg">SkatchRed Button <span class="BadgeSkatchRedValue">1</span></button>
                        <button class="BadgeButton BadgeSkatchGreenBg">SkatchGreen Button <span class="BadgeSkatchGreenValue">1</span></button>
                        <button class="BadgeButton BadgeYellowBg">SkatchYellow Button <span class="BadgeSkatchYellowValue">1</span></button>
                        <button class="BadgeButton BadgeSkatchBlueBg">SkatchBlue Button <span class="BadgeSkatchBlueValue">1</span></button>
                        <button class="BadgeButton BadgeSkatchGrayBg">SkatchGray Button <span class="BadgeSkatchGrayValue">1</span></button>
                        <br/><br/>
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
            &lt;button className="BadgeButton BadgeSkatchRedBg"&gt; {"\n"}
                SkatchRed 
                &lt;span className="BadgeSkatchRedValue"&gt; {"\n"}
                    1
                &lt;/span&gt; {"\n"}
            &lt;/button&gt; {"\n"}

            &lt;button className="BadgeButton BadgeSkatchGreenBg"&gt; {"\n"}
                SkatchGreen Button 
                &lt;span className="BadgeSkatchGreenValue"&gt; {"\n"}
                    1
                &lt;/span&gt; {"\n"}
            &lt;/button&gt; {"\n"}

            &lt;button className="BadgeButton BadgeYellowBg"&gt; {"\n"}
                SkatchYellow Button 
                &lt;span className="BadgeSkatchYellowValue"&gt; {"\n"}
                    1
                &lt;/span&gt; {"\n"}
            &lt;/button&gt; {"\n"}

            &lt;button className="BadgeButton BadgeSkatchBlueBg"&gt; {"\n"}
                SkatchBlue Button 
                &lt;span className="BadgeSkatchBlueValue"&gt; {"\n"}
                    1
                &lt;/span&gt; {"\n"}
            &lt;/button&gt; {"\n"}

            &lt;button className="BadgeButton BadgeSkatchGrayBg"&gt; {"\n"}
                SkatchGray Button 
                &lt;span className="BadgeSkatchGrayValue"&gt; {"\n"}
                    1
                &lt;/span&gt; {"\n"}
            &lt;/button&gt; {"\n"}

            &lt;/xmp&gt; {"\n"}
        </code></pre>
            </div>
        <br/><br/>
        {/* <!-- Second Item --> */}
        <div>
            <p class="componentSubTitle">Elipse Badges</p><br/>
            <a href="javascript:void(0)" class="ElipseBadge ElipseBadgeRedBg">Elipse Red Badge</a>
            <a href="javascript:void(0)" class="ElipseBadge ElipseBadgeGreenBg">Elipse Red Badge</a>
            <a href="javascript:void(0)" class="ElipseBadge ElipseBadgeYellowBg">Elipse Red Badge</a>
            <a href="javascript:void(0)" class="ElipseBadge ElipseBadgeBlueBg">Elipse Red Badge</a>
            <a href="javascript:void(0)" class="ElipseBadge ElipseBadgeGrayBg">Elipse Gray Badge</a>

            <br/><br/>
            <pre class="language-html"><code class="language-html">
            &lt;xmp className="codeSnippets"&gt; {"\n"}
&lt;a href="javascript:void(0)" className="ElipseBadge ElipseBadgeRedBg"&gt; {"\n"}
    Elipse Red Badge
&lt;/a&gt; {"\n"}

&lt;a href="javascript:void(0)" className="ElipseBadge ElipseBadgeGreenBg"&gt; {"\n"}
    Elipse Green Badge
&lt;/a&gt; {"\n"}

&lt;a href="javascript:void(0)" className="ElipseBadge ElipseBadgeYellowBg"&gt; {"\n"}
    Elipse Yellow Badge
&lt;/a&gt; {"\n"}

&lt;a href="javascript:void(0)" className="ElipseBadge ElipseBadgeBlueBg"&gt; {"\n"}
    Elipse Blue Badge
&lt;/a&gt; {"\n"}

&lt;a href="javascript:void(0)" className="ElipseBadge ElipseBadgeGrayBg"&gt; {"\n"}
    Elipse Gray Badge
&lt;/a&gt; {"\n"}
            &lt;/xmp&gt; {"\n"}
            </code></pre>
        </div>
    </section>


        </React.Fragment>
    );
}

export default Badge;