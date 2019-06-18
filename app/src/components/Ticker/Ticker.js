import React, { Component } from 'react';
import './Ticker.css';
import MSFT from '../MSFT'
import GOOGL from '../GOOGL'
import AMZN from '../AMZN'
import FB from '../FB'
import ISRG from '../ISRG'
import T from '../T'
import VZ from '../VZ'
import F from '../F'
import GM from '../GM'
import OKE from '../OKE'
import TERP from '../TERP'
import BIP from '../BIP'
import CTRE from '../CTRE'
import IRBT from '../IRBT'
import LULU from '../LULU'
import W from '../W'
import NFLX from '../NFLX'
import STZ from '../STZ'

export default class Ticker extends Component {
    
    render() {
        return (

<div className="tech-slideshow">
  <div className="mover-1">
      <div className="Div">
      <MSFT /> 
      <GOOGL />
      <AMZN />

      <MSFT />
      <FB />
      <ISRG />
      <T />
      <VZ />
      <F />
      <GM />
      <OKE />
      <TERP />
      <BIP />  
      <CTRE />
      <LULU />
      <W />
      <NFLX />
      <STZ />
      
      </div>
    </div>
</div>

        )
    }
}
