import React, { useContext } from 'react';
import '../css/CardList.css';
import noteContext from "../context/notes/noteContext";

const Card = (props) => {
    const context = useContext(noteContext);
    const {activeCard } = context;

    return <div className={`${activeCard === props.title ? 'active-card' : ''} card`} onClick={() => {props.handleClick(props.title); }}>
        <div className="badge">{props.numberOfCards}</div>
        <h2>{props.title}</h2>
    </div>
};

export default Card;