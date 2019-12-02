import React from 'react';
import './homewidget.css';

export default function Homewidget(props) {

    return (
        <img src={props.image} className={props.imageClass} alt="Home graphic" />
		);
}; 