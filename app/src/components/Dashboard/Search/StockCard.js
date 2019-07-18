import React from "react";


const StockCard = props => {
  return (
      
    <div>
      <h2>{props.symbol}</h2>
      <ul>
          <li>open: {props.open}</li>
          <li>high: {props.high}</li>
          <li>low: {props.low}</li>
          <li>close: {props.close   }</li>
      </ul>
    </div>
    
  );
};

export default StockCard;