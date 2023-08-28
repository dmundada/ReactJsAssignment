import React from 'react';
import '../css/CardList.css';

const Card = (props) => (
    <div className="card" onClick={() => props.handleClick(props.title)}>
        <div className="badge">{props.numberOfCards}</div>
        <h2>{props.title}</h2>
    </div>
);

export default Card;