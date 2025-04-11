import React from 'react';

export default function IndirectChildren (props) {
    return (
        <div>
            <div>Children</div>
            <button onClick={
                function(e){
                    props.serveInfo("João","Senhoras e Senhores", true)
                }
              
            }>
                Serve Info</button>
        </div>
    );
};