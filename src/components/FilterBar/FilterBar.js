import React from 'react'

export function FilterBar(props) {
    return (
        <div>
            <input onChange={props.handleChange} placeholder="enter search here."></input>
            <button>Search</button>
            <button onClick={props.handleClick}>Get All</button>
        </div>
    )
}