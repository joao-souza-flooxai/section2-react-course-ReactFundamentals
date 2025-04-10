import React from "react";

export default function Random (props) {
    const aleatorio = Math.random() * (props.max - props.min);
    //Destruturação de um obj
    const {min,max} = props;
    return (
        <div>
            <h2>Valor Aleatório</h2>
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