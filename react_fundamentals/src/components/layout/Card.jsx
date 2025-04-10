import React from "react";
import "./Card.css";

export default function Card(props){
//class é uma palavra reservada
    return (
            <div className="Card">
                <div className="Title">{props.title}</div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
    );
}