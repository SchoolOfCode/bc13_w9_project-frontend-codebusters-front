import React from 'react'
import logo from "../../logo.png"
import './Header.css'

export function Header (props) {
    return (
        <div className="headerDiv">

            <div className="headerButtons">
                <button className="englishButton" onClick={props.handleEnglish}>English</button>
                <button className="spanishButton" onClick={props.handleSpanish}>Spanish</button>
                <button className="frenchButton" onClick={props.handleFrench}>French</button>
                <button className="germanButton" onClick={props.handleGerman}>German</button>
            </div>

            <div className="imageDiv">
                <img className="image" src = {logo} alt="logo"></img>
            </div>

            <div className="headerTitle">

                <div className="titleDiv">
                    <h1 className="title">  School of Code{"\n"}Across the Globe</h1> 
                </div>

            </div>
    
        </div>
    )
}