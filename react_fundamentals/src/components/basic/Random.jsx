import React from "react";

export default function Random (props) {
    const {min,max} = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    //Destruturação de um obj
    return (
        <div>
            <h3>Valor Aleatório</h3>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    );
}