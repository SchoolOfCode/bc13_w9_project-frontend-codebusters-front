import React from 'react'
import "./FilterBar.css"

export function FilterBar(props) {
    if (props.language === 'englishDefinitions'){
        return (
            <div>
                <input className="input" onChange={props.handleChange} placeholder="enter search here."></input>
                <button className="searchButton" onClick={props.handleClick}>Search</button>
                <button className="getAllButton" onClick={props.handleClick}>Get All</button>
                <button className="sortByWeekButton" onClick={props.handleSort}>Sort by week</button>
                <button className="favouriteButton" onClick={props.displayFave}>Show favourites</button>
            </div>
        )
    }else{
        return (
            <div>
                <input onChange={props.handleTranslate} placeholder="enter word in english to get translation."></input>
                <button onClick={props.foreignClick}>Get Translation</button>
                <input onChange={props.handleChange} placeholder="enter search here."></input>
                <button onClick={props.handleClick}>Search</button>
                <button onClick={props.handleClick}>Get All</button>
                <button onClick={props.handleSort}>Sort by week</button>
                <button onClick={props.displayFave}>Show favourites</button>
            </div>
        )
    }
}