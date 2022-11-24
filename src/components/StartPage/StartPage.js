import React from 'react'
import "./StartPage.css"
import logo from "../../logo.mp4"

export function StartPage (props) {
    return (
        <div className="start-container">
        <div className="imageDivs">
        <video muted autoplay> 
            <source src={logo} type='video/mp4; codecs="avc1.4d002a, mp4a.40.2"'/> 
        </video>
                {/* <img className="images" src = {logo} alt="logo"></img> */}
            </div>
            <h3 className="chooseYourLanguage">Choose Your Language</h3>

            <div className="langButtonDiv">
                <button className="langButtonEnglish" onClick={props.changeEnglish}>English</button>
                
                <button className="langButtonSpanish" onClick={props.changeSpanish}>Spanish</button>
                
                <button className="langButtonFrench" onClick={props.changeFrench}>French</button>
                
                <button className="langButtonGerman" onClick={props.changeGerman}>German</button>
            </div>
        </div>
    )
}

