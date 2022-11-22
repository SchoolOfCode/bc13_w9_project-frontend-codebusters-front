import React from 'react'

export function ObjectItem(props) {
    console.log("items", props)
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.definition}</p>
            <img alt="examples" src={props.example}></img>
            <a href={props.links}>{props.links}</a>
            <p>{props.week}</p>
        </div>
    )
}