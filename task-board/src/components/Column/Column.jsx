import React from 'react'
import Task from '../Task/Task'

export default function Column({tasks=[], title='', btns=[]}) {

    return (
        <div className='col'>
            <h2>{title} {tasks.length}</h2>
            {tasks.length ? <ul>
                {tasks.map((item) => <Task key={item.id} item={item} btns={btns}/>)}
            </ul> : null}
        </div>  
    )
}