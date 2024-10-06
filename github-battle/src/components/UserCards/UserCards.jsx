import React, { useContext } from 'react';
import UserCard from '../UserCard/UserCard';
import BattleContext from '../../contexts/BattleContext';


export default function UserCards() {

    const { users } = useContext(BattleContext);

    return (

        <div className='cards'>
            {users.map((user, index) => <UserCard key={user.id} user={user} index={++index} />)}
        </div>

    )
}