import React from 'react'
import {ObjectItem} from '../ObjectItem/ObjectItem.js'

export function ObjectList(props) {
    console.log(props)
    props.object.map((item) => {
        console.log("item", item)
        return (
                <ObjectItem key={item.id} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week}></ObjectItem>
        )
    })

}