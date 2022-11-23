import React from 'react'
import './ObjectList.css'
import { ObjectItem } from '../ObjectItem/ObjectItem.js'

export function ObjectList(props) {
   //console.log("object list", props)
    return (
        <div className="object-list-container">
            {props.object.map((item) => {
                return (<ObjectItem key={item.id} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week} handleFavourite={() => props.handleFavourite(item.id)} handleDelete={() => props.handleDelete(item.id)} handleEdit={() => props.handleEdit(item.id)}/>)
            })}
        </div>
    )
}