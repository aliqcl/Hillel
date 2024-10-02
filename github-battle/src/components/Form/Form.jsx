import React, {useState} from 'react';
import {DEFAULT_USERNAME, DEFAULT_FORM_STATE} from '../../constants/players';
import service from '../../services/players';
import './style.css';


export default function Form() {

    const [players, setPlayers] = useState([]);
    const [username, setUsername] = useState(DEFAULT_USERNAME);  
    const [formState, setFormState] = useState(DEFAULT_FORM_STATE);


    const handleUsername = (event) => {
        setUsername(event.target.value);
        console.log(username);
    }

    const handleSubmit = (event, username) => {
        event.preventDefault();
        const response = service.getPlayer(username);
        console.log(response);
    }


    return (<>

        <h1> Let's Get Ready to Rumble 🥊 </h1>

        <div className='container'>

        {formState[0].isHidden === false ?
            <form onSubmit={handleSubmit(event, event.target.value)} >
                <label>
                Choose Player 1 username: 
                    <input 
                        type='text' 
                        defaultValue={username}
                        onChange={handleUsername}
                    > </input>
                </label>
                <button>Submit</button>
            </form>
        : null};

        {formState[1].isHidden === false ?
            <form>
                <label>
                Choose Player 2 username: 
                    <input 
                        type='text' 
                        defaultValue={username}
                        onChange={handleUsername}
                    > </input>
                </label>
                <button>Submit</button>
            </form>
        : null};

        </div>

    </>)
}