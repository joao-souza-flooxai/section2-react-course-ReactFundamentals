import React from "react"

export default function EvenOrOdd(props){

    const isPar = props.number % 2 === 0;

    return(
        <div>
            <span>{props.number}<br/></span>
            {isPar ? 
                <span>Even</span>:
                <span>Odd</span>
            }
        </div>
    );
}