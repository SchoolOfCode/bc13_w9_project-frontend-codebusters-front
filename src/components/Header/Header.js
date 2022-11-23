import React from 'react'
import logo from "../../logo.png"
import './Header.css'

export function Header (props) {
    return (
        <div className="headerDiv">

        <div className="imageDiv">
            <img className="image" src = {logo} alt="logo"></img>
        </div>

        <div className="headerButtons">
            <button onClick={props.handleEnglish}>English</button>
            <button onClick={props.handleSpanish}>Spanish</button>
            <button onClick={props.handleFrench}>French</button>
            <button onClick={props.handleGerman}>German</button>
        </div>

        <div className="headerTitle">
            <h1 className="title">Title</h1>
        </div>
    
        </div>
    )
}