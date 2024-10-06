import React, { useContext } from 'react';

import BattleContext from '../../contexts/BattleContext';


export default function UserStats({ user }) {

    const { score } = useContext(BattleContext);

    return (<>

        <ul>
            <li> 👥Followers: {user.data.followers} </li>
            <li>
                ⭐️Repositories stars: {user.repos.reduce((stars, repo) => {
                    return stars + repo.stargazers_count;
                }, 0)}
            </li>
            <li> 🏁Total score: {score.find((item) => item.id === user.id).score} </li>
        </ul>

    </>)
}