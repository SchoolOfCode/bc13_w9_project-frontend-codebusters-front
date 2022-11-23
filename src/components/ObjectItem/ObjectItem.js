import React from 'react'
import './ObjectItem.css'

export function ObjectItem(props) {
    return (
        <div className="item-container">
            <div style={{display: "flex"}}><h2 style={{marginRight: "50px"}}>{props.title}</h2><h2>{props.englishTitle}</h2></div>
            <p>{props.definition}</p>
            <img alt="examples" src={props.example}></img>
            <a href={props.links}>{props.links}</a>
            <p>{props.week}</p>
            <button onClick={props.handleDelete}>Delete</button>
            <button onClick={props.handleEdit}>Edit</button>
            <button onClick={props.handleFavourite}>Favourite</button>
        </div>
    )
}