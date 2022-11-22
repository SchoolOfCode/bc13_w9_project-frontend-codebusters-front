import React from 'react'
import './Input.css'
import { useState } from 'react'

export function Input(props) {

    const [title, setTitle] = useState()
    const [definition, setDefinition] = useState()
    const [example, setExample] = useState()
    const [links, setLinks] = useState()
    const [week, setWeek] = useState()

    function createObject() {
        props.handleNewObject({
            title: title,
            definition: definition,
            example: example,
            links: links,
            week: week
        })
        props.visibility() 
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
        setWeek(e.target.value)
    }

    return (
        <div className="form-items">
            <input placeholder="title" onChange={handleTitle}></input>
            <input placeholder="definition" onChange={handleDefinition}></input>
            <input placeholder="example" onChange={handleExample}></input>
            <input placeholder="links" onChange={handleLinks}></input>
            <input placeholder="week" onChange={handleWeek}></input>
            <button onClick={createObject}>Add</button>
        </div>
    )
}