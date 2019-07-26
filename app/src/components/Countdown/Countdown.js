import React, { Component } from 'react';
import './Countdown.css';
import moment from 'moment';

export default class Countdown extends Component {
    

    render() {

      const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let time = moment().add(1, 'days').format("MMMM DD, YYYY")  
    let marketcountDown = new Date(`${time} 06:00:00`).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = marketcountDown - now;
    
          document.getElementById('markethours').innerText = Math.floor((distance % (day)) / (hour));
          document.getElementById('marketminutes').innerText = Math.floor((distance % (hour)) / (minute));
          document.getElementById('marketseconds').innerText = Math.floor((distance % (minute)) / second);
      }, second)
    
        return (
            <div class="container">
            <h1 id="head">Countdown until market opens:</h1>
                <ul>
                    <li><span id="markethours"></span>Hours</li>
                    <li><span id="marketminutes"></span>Minutes</li>
                    <li><span id="marketseconds"></span>Seconds</li>
                </ul>
            </div>
        )
    }
}


