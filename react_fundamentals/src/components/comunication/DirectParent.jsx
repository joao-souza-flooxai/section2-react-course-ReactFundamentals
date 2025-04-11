import React from 'react';
import DirectChildren from './DirectChildren';


export default function DirectParent (props) {
    return (
        <div>
            <DirectChildren text="Filho 1" number={20} bool={true} />
        </div>
    );
};