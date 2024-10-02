import React, {useState, useEffect} from "react";
import Form from '../Form/Form';
import ColorOicker from "../ColorPicker/ColorPicker";
import service from '../../services/todos';
import './style.css';


export default function ToDos() {

    const [todos, setToDos] = useState([]);
    const [listColor, setListColor] = useState();


    const getToDos = async () => {
        const response = await service.get();
        setToDos(response);
    }

    useEffect(() => {
        getToDos();
    }, [])

    const getClassName = item => {
        const classes = [];

        if(item.completed) classes.push('completed__item')
        else if (item.priority) classes.push('priority__item');

        return classes.join(' ');
    }

    const handleDeleteItem = async id => {
        await service.delete(id);
        getToDos();
    }

    const handleChangeStatus = async item => {
        await service.put(item.id, {...item, completed: !item.completed});
        getToDos();
    }

    const handleChangePriority = async item => {
        await service.put(item.id, {...item, priority: !item.priority});
        getToDos();
    }

    const liftedNewToDo = item => {
        if(Object.keys(item).length) getToDos();
    }


    return <>

        <h1>TO DO LIST</h1>

        <Form liftingNewToDo={liftedNewToDo} />

        <div className="tools">
            <ColorOicker liftingColor={setListColor} />
        </div>
    
        {todos.length ? 

            <ul style={{color: listColor}}>
                {todos.map(item =>
                    <li className = {getClassName(item)} key = {item.id} onClick = {() => handleChangeStatus(item)}>
                        
                        <button 
                            id="img__btn" 
                            onClick = {(event) => {
                                event.stopPropagation();
                                handleDeleteItem(item.id)}
                            }>
                            
                            <img src="src/img/delete.png" height={20} width={20}/>
                        
                        </button>

                        <button 
                            id="img__btn" 
                            onClick = {(event) => {
                                event.stopPropagation();
                                handleChangePriority(item)}
                            }
                            className = {getClassName(item)}
                            >

                            <img src="src/img/priority.png" height={20} width={20}/>

                        </button>

                        {item.title} 
                    
                    </li>
                )}
            </ul>

        : null}

    </>
    
}