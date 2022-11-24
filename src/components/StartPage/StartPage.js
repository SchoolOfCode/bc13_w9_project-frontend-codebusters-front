import React from 'react'
import "./StartPage.css"
// import logo from "../../logo.mp4"

export function StartPage (props) {
    return (
        <div className="start-container">
        <div className="imageDivs">
        {/* <video muted autoplay>  */}
            {/* <source src={logo} type='video/mp4; codecs="avc1.4d002a, mp4a.40.2"'/>  */}
            {/* <source src="../../logo.mp4" type="video/mp4"/> */}
            <video width="750" height="500" controls >
      <source src="../../../Who are you gonna call.gif" type="gif"/>
</video>

        {/* </video> */}
                {/* <img className="images" src = {logo} alt="logo"></img> */}
            </div>
            <h3 className="chooseYourLanguage">Choose Your Language</h3>

            <div className="langButtonDiv">
                <button className="langButtonEnglish" onClick={props.changeEnglish}></button>
                
                <button className="langButtonSpanish" onClick={props.changeSpanish}></button>
                
                <button className="langButtonFrench" onClick={props.changeFrench}></button>
                
                <button className="langButtonGerman" onClick={props.changeGerman}></button>
            </div>
        </div>
    )
}

