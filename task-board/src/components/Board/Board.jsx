import React, {useState, useEffect} from 'react'
import './style.css'
import {API, TASK_STATUS} from '../../constants/tasks'
import Column from '../Column/Column';


export default function Board() {

    const [tasks, setTasks] = useState([]);
    const [tasksToDo, setTasksToDo] = useState([]);
    const [tasksProgress, setTasksProgress] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);


    useEffect(() => {

        (async () => {
            const request = await fetch(API),
                response = await request.json();
            
            setTasks(response);
        })();

    } ,[])

    useEffect(() => {

        setTasksToDo(tasks.filter(item => item.status === TASK_STATUS.TO_DO));
        setTasksProgress(tasks.filter(item => item.status === TASK_STATUS.IN_PROGRESS));
        setTasksDone(tasks.filter(item => item.status === TASK_STATUS.DONE));

    } ,[tasks])


    const handleStatusProgress = async item => {

        try{

            const request = await fetch(API+`/${item.id}`, {
                method: 'PUT',
                body: JSON.stringify({...item, status: TASK_STATUS.IN_PROGRESS}),
                headers: {"Content-type": "application/json"}
            })
            const response = await request.json();

            setTasks(prevState => prevState.map(element => {
                if(element.id === response.id) element = response;
                return element;
            }))
        
        } catch(err) {
            console.log(err);
        }

    }

    const handleStatusTodo = async item => {

        try{

            const request = await fetch(API+`/${item.id}`, {
                method: 'PUT',
                body: JSON.stringify({...item, status: TASK_STATUS.TO_DO}),
                headers: {"Content-type": "application/json"}
            })
            const response = await request.json();

            setTasks(prevState => prevState.map(element => {
                if(element.id === response.id) element = response;
                return element;
            }))
        
        } catch(err) {
            console.log(err);
        }

    }

    const handleStatusDone = async item => {

        try{

            const request = await fetch(API+`/${item.id}`, {
                method: 'PUT',
                body: JSON.stringify({...item, status: TASK_STATUS.DONE}),
                headers: {"Content-type": "application/json"}
            })
            const response = await request.json();

            setTasks(prevState => prevState.map(element => {
                if(element.id === response.id) element = response;
                return element;
            }))
        
        } catch(err) {
            console.log(err);
        }

    }

    const handleArchiveTask = async item => {

        try{

            await fetch(API+`/${item.id}`, {
                method: 'DELETE'
            })

            setTasks(prevState => prevState.filter(element => element.id !== item.id))
        
        } catch(err) {
            console.log(err);
        }

    }


    return (

        <div className='board'>

            <Column 
                tasks={tasksToDo} 
                title={'TO DO:'}
                btns={[{title: 'IN PROGRESS', action: handleStatusProgress}]}
            />

            <Column 
                tasks={tasksProgress} 
                title={'IN PROGRESS:'}
                btns={[{title: 'TO DO', action: handleStatusTodo}, {title: 'DONE', action: handleStatusDone}]}
            />

            <Column 
                tasks={tasksDone} 
                title={'DONE:'}
                btns={[{title: 'TO ARCHIVE', action: handleArchiveTask}]}
            />

        </div>

    );

}
