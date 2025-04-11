import React from 'react';

export default function FamilyMember(props){
    return(
        <div>{props.name} <strong>{props.surname} </strong></div>
    )
}