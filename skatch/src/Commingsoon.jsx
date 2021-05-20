import React, { useState } from 'react';
import './css/Commingsoon.css';
import calander from './images/Commingsoon.svg';

let Commingsoon = ()=>{
    let [time,updateTime] = useState({
        day:"",
        hour:"",
        minute:"",
        second:"",
    });
  
    setTimeout(()=>{
        let startDate = new Date('05-20-2021 12:00:08');
        // Do your operations
        let endDate   = new Date();
        let seconds = Math.abs((endDate.getTime() - startDate.getTime()) / 1000);
        let Day = parseInt(seconds/86400);
        seconds = seconds%86400;
        let hours = parseInt(seconds/3600);
        seconds = seconds%3600;
        let minutes = parseInt(seconds/60);
        seconds = parseInt(seconds%60);
        updateTime(prev=>{
            return {
                day:Day,
                hour:hours,
                minute:minutes,
                second:seconds
            }
        });

    },1000);

    return(
        <React.Fragment>
            <br/><br/><br/><br/>
            <h1 className="brandName">Skatch</h1>
            <h1 className="title"><span>We are Comming</span> Soon!</h1>
            <h1><span className="timeBlock">{time.day}<span>d</span></span> <span className="timeBlock">{time.hour}<span>h</span></span> <span className="timeBlock">{time.minute}<span>m</span></span> <span className="timeBlock">{time.second}<span>s</span></span></h1>
            <img src={calander} className="calander"/>
        </React.Fragment>
    );
}

export default Commingsoon;