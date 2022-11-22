import React from 'react'
import './ObjectList.css'
import { ObjectItem } from '../ObjectItem/ObjectItem.js'

export function ObjectList(props) {
   // console.log(props)
    return (
        <div className="object-list-container">
            {props.object.map((item) => {
                return (<ObjectItem key={item.id} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week} handleDelete={() => props.handleDelete(item.id)} />)
            })}
        </div>
    )
}