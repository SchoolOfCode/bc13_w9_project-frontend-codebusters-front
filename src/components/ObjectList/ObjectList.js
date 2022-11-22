import React from 'react'
import { ObjectItem } from '../ObjectItem/ObjectItem.js'

export function ObjectList(props) {
   // console.log(props)
    return (
        <div>
            {props.object.map((item) => {
                return (<ObjectItem key={item.id} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week} handleDelete={() => props.handleDelete(item.id)} />)
            })}
        </div>
    )
}