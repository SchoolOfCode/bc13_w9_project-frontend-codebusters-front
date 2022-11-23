import React from 'react'
import './Input.css'
import { useState } from 'react'

export function Input(props) {

    const [title, setTitle] = useState()
    const [englishTitle, setEnglishTitle] = useState()
    const [definition, setDefinition] = useState()
    const [example, setExample] = useState()
    const [links, setLinks] = useState()
    const [week, setWeek] = useState()

    function createObject() {
        if (props.language === 'englishDefinitions'){

            props.handleNewObject({
                title: title,
                definition: definition,
                example: example,
                links: links,
                week: week
            })
        }else{
            props.handleNewObject({
                englishtitle: englishTitle,
                title: title,               
                definition: definition,
                example: example,
                links: links,
                week: week
            })
        }
        props.visibility() 
    }

    function handleEnglishTitle(e) {
        setEnglishTitle(e.target.value)
    }
    function handleTitle(e) {
        setTitle(e.target.value)
    }
    function handleDefinition(e) {
        setDefinition(e.target.value)
    }
    function handleExample(e) {
        setExample(e.target.value)
    }
    function handleLinks(e) {
        setLinks(e.target.value)
    }
    function handleWeek(e) {
        const value = e.target.value
        if (Validate(value)){
            setWeek(value)
        }else{
            alert('week must be a number')
        }
    }

    function Validate(value) {
        if(value.match(/^[0-9]*$/)){
            return true
        }
        return false
    }

    if (props.language === 'englishDefinitions'){
        return (
            <div className="form-items">
                <button onClick={props.visibility}>X</button>
                <input placeholder="title" onChange={handleTitle}></input>
                <input placeholder="definition" onChange={handleDefinition}></input>
                <input placeholder="example" onChange={handleExample}></input>
                <input placeholder="links" onChange={handleLinks}></input>
                <input default="888" placeholder="week" onChange={handleWeek}></input>
                <button onClick={createObject}>Add</button>
            </div>
        )
    }else{
        return (
            <div className="form-items">
                <button onClick={props.visibility}>X</button>
                <input placeholder="title in english" onChange={handleEnglishTitle}></input>
                <input placeholder="title" onChange={handleTitle}></input>           
                <input placeholder="definition" onChange={handleDefinition}></input>
                <input placeholder="example" onChange={handleExample}></input>
                <input placeholder="links" onChange={handleLinks}></input>
                <input default="888" placeholder="week" onChange={handleWeek}></input>
                <button onClick={createObject}>Add</button>
            </div>
        )
    }
}