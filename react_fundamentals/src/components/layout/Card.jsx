import React from "react";
import "./Card.css";

export default function Card(props){

const style ={
    //como não é possível usar -, usa-se camelCase
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
}

    return (
        //class é uma palavra reservada por isso usa-se className
            <div className="Card" style={style}>
                <div className="Title">{props.title}</div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
    );
}