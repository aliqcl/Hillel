import React, { useContext, useEffect, useState } from 'react';

import { RESET_USER_ACTION } from '../../actions/battle';

import BattleContext from '../../contexts/BattleContext';

import Button from '../Button/Button';
import UserStats from '../UserStats/UserStats';
import UserLabel from '../UserLabel/UserLabel';


export default function UserData({ user }) {

    const { score, dispatch } = useContext(BattleContext);

    const [showStats, setShowStats] = useState(false);
    const [showStatus, setShowStatus] = useState(false);


    const resetUser = () => {
        dispatch({ type: RESET_USER_ACTION, payload: user })
    }


    useEffect(() => {
        if (score && score.length) {
            setShowStats(true);
            setShowStatus(true);
        } else {
            setShowStats(false);
            setShowStatus(false);
        }
    }, [score])


    return (<>

        {user.data ?

            <div className='card__data'>
                {showStatus && <UserLabel user={user} />}

                <img className='data__img' src={user.data.avatar_url} alt={user.data.login} />
                <p className='data__name'> @{user.data.login} </p>

                {showStats ? <UserStats user={user} /> : <Button title={'🔄Reset'} handleClick={resetUser} />}

            </div>

            : null}

    </>)
}