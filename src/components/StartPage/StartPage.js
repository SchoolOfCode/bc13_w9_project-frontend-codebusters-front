import React from 'react'

export function StartPage (props) {
    return (
        <div className="start-container">
            <h3>Choose Your Language</h3>
            <div>
                <button onClick={props.changeEnglish}>English</button>
                <button onClick={props.changeSpanish}>Spanish</button>
                <button onClick={props.changeFrench}>French</button>
                <button onClick={props.changeGerman}>German</button>
            </div>
        </div>
    )
}

//nclick="Hey(); Ho();