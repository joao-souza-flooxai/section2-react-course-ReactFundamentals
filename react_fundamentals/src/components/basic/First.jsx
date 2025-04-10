import React from 'react';

export default function First() {

    const msg = "Message from the First Compoment";
    
    return ( <div>
                <p>First Component:</p> 
                <p>{msg}</p>
            </div>
    );
}