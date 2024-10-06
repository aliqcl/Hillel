import React, { useContext } from "react";

import BattleContext from '../../contexts/BattleContext';


export default function UserLabel({ user }) {

    const { score } = useContext(BattleContext);

    const userScore = score.find(score => score.id === user.id);


    if (score.indexOf(userScore) === 0) {
        return <p className="user__label"> Winner 🥳 </p>;
    } else {
        return <p className="user__label"> Loser 🥵 </p>;
    }

}