import React, {useState, useRef} from "react";
import {DEFAULT_NEW_TODO} from '../../constants/todos';
import service from '../../services/todos';
import './style.css';


export default function Form({liftingNewToDo}) {

    const [newTodo, setNewTodo] = useState(DEFAULT_NEW_TODO);

    const formRef = useRef();

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const response = await service.post(newTodo);
        liftingNewToDo(response);

        setNewTodo(DEFAULT_NEW_TODO);
        formRef.current.reset();
    }

    const handleNewTodoTitle = (event) => {
        setNewTodo(prevState => ({...prevState, title: event.target.value}));
    }

    const handleNewTodoPriority = (event) => {
        setNewTodo(prevState => ({...prevState, priority: event.target.checked}));
    }


    return (
        <form ref={formRef} onSubmit={handleSubmitForm}>
            <h2>Add to do</h2>
            <p>*please fill out the fields to create a new to do item</p>
            <label>
                Title: <input type="text" defaultValue={newTodo.title} onChange={handleNewTodoTitle} />
            </label>
            <label>
                Priority: <input type="checkbox" defaultChecked={newTodo.priority} onChange={handleNewTodoPriority} />
            </label>
            <button id="img__btn">
                <img src="src/img/add.png" height={25} width={25}/>
            </button>
        </form>
    )

}