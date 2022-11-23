import React from 'react'

export function Header (props) {
    return (
        <div>
            <img alt="logo"></img>
            <button onClick={props.handleSpanish}>Spanish</button>
            <button onClick={props.handleFrench}>French</button>
            <button onClick={props.handleGerman}>German</button>
            <button onClick={props.handleEnglish}>English</button>
            <h1>Title</h1>
        </div>
    )
}