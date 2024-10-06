import React, { useRef, useContext } from 'react';

import service from '../../services/players';

import { SET_PLAYER_DATA_ACTION } from '../../actions/battle';

import BattleContext from '../../contexts/BattleContext';

import Button from '../Button/Button';


export default function UserCard({ user, index }) {

    const { dispatch } = useContext(BattleContext);

    const inputRef = useRef();
    const labelRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        labelRef.current.classList.contains('form__label__error') && labelRef.current.classList.remove('form__label__error');

        const username = inputRef.current.value;

        try {
            const response = await service.getPlayer(username);
            dispatch({ type: SET_PLAYER_DATA_ACTION, payload: { ...user, data: response } })
        } catch (err) {
            console.log(err);
            labelRef.current.classList.add('form__label__error');
        }
    }

    return (

        <form className='card__form' onSubmit={handleSubmit}>
            <label ref={labelRef} className='form__label'>
                <p className='label__title'>Choose <b>Player {index}</b> username:</p>
                <input ref={inputRef} required type='text' className='label__input' placeholder='username' defaultValue={user.username} />
                <p className='label__error'>Username not exist</p>
            </label>
            <Button title={'⬆️Submit'} />
        </form>

    )
}