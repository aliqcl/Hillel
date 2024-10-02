import React from 'react'

export default function Task({item={}, btns=[]}) {

    return (
        <li key = {item.id}>
            {item.title}
            {btns.map((btn, index) => <button key={index} onClick={() => btn.action(item)}>{btn.title}</button>)}
        </li>
    )

}