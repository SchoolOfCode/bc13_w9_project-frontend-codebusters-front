import React from 'react'
import './ObjectItem.css'

export function ObjectItem(props) {
    return (
        <div className="item-container">
            <h3>{props.title}</h3>
            <p>{props.definition}</p>
            <img alt="examples" src={props.example}></img>
            <a href={props.links}>{props.links}</a>
            <p>{props.week}</p>
            <button onClick={props.handleDelete}>Delete</button>
        </div>
    )
}