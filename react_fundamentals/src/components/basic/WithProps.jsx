import React from 'react';
//Props são readonly se quiser manipula-las coloque em variáveis
export default function WithProps(props) {
    return ( 
            <div>
                <p>{props.title}</p> 
                <p>{props.student}</p>
                <p>{props.grade}</p>
            </div>
    );
}