import React from 'react';
import propTypes from 'prop-types';

export default function Percantage({caught, total}){
    const percent = caught / total * 100;
    return(
        <div id="Progress-Container">
            <div id="Progress-Fill" style={{width: `${percent}%`}}></div>
            <h3>{percent}% Complete! {total - caught} more to catch!</h3>
        </div>
    )
}

Percantage.propTypes = {
    caught: propTypes.number.isRequired,
    total: propTypes.number.isRequired
};