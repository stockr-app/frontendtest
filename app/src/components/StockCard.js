import React from "react";

const StockCard = (props) => {
    return(
        <div>

                <h5>Open: {props.open}</h5>
                <h5>High: {props.high}</h5>
                <h5>Low: {props.low}</h5>
                <h5>Close: {props.close}</h5>

        </div>
    )
}

export default StockCard