import React, { useEffect, useReducer } from 'react';

import UserCards from '../UserCards/UserCards';
import Button from '../Button/Button';

import BattleContext from '../../contexts/BattleContext';

import {
    RESET_USER_ACTION,
    SET_PLAYER_DATA_ACTION,
    SET_BATTLE_BTN_ACTION,
    SET_RESTART_BTN_ACTION,
    SET_USER_REPOS_ACTION,
    SET_USER_SCORE_ACTION,
    RESET_BATTLE_ACTION,
    RESET_SCORE_ACTION
} from '../../actions/battle';

import service from '../../services/players';

import './style.css';


export default function Battle() {

    const initState = {
        users: [
            {
                id: 1,
                username: 'visionmedia'
            },
            {
                id: 2,
                username: 'c9s'
            },
            {
                id: 3
            }
        ],
        showBattleBtn: false,
        showRestartBtn: false
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case SET_PLAYER_DATA_ACTION:
                return {
                    ...state, users: state.users.map(user => {
                        if (user.id === payload.id) {
                            user.data = payload.data;
                            user.username = payload.data.login;
                        }
                        return user;
                    })
                }
            case RESET_USER_ACTION:
                return {
                    ...state, users: state.users.map(user => {
                        if (user.id === payload.id) {
                            return { id: user.id };
                        }
                        return user;
                    })
                }
            case SET_BATTLE_BTN_ACTION:
                return { ...state, showBattleBtn: payload }
            case SET_RESTART_BTN_ACTION:
                return { ...state, showRestartBtn: payload }
            case SET_USER_REPOS_ACTION:
                return {
                    ...state, users: state.users.map(user => {
                        if (user.id === payload.id) user.repos = payload.repos;
                        return user;
                    })
                }
            case SET_USER_SCORE_ACTION:
                return {
                    ...state, score: state.users.map(user => {
                        const followers = user.data.followers;
                        const repos_stars = user.repos.reduce((stars, repo) => {
                            return stars + repo.stargazers_count;
                        }, 0)
                        const score = followers + repos_stars;
                        return { id: user.id, score };
                    })
                        .sort((a, b) => b.score - a.score)
                }
            case RESET_BATTLE_ACTION:
                return { ...state, users: state.users.map(user => ({ id: user.id })) };
            case RESET_SCORE_ACTION:
                return { ...state, score: [] };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initState);


    useEffect(() => {
        console.log('in Battle for users', state.users);
    }, [state.users]);


    useEffect(() => {
        const everyUserData = state.users.every(user => user.data && Object.keys(user.data).length);
        dispatch({ type: SET_BATTLE_BTN_ACTION, payload: everyUserData });
    }, [state.users]);


    useEffect(() => {
        const everyUserRepos = state.users.every(user => user.repos);
        everyUserRepos && dispatch({ type: SET_USER_SCORE_ACTION });
    }, [state.users])


    useEffect(() => {
        console.log('useEffect for score', state.score);
        if (state.score && state.score.length) {
            dispatch({ type: SET_BATTLE_BTN_ACTION, payload: false });
            dispatch({ type: SET_RESTART_BTN_ACTION, payload: true });
        }
    }, [state.score]);


    const startBattle = async () => {
        try {
            Promise
                .all(state.users.map(user => service.getPlayerStats(user.data.login).then(repos => ({ ...user, repos }))))
                .then(data => {
                    console.log(data);
                    data.forEach(user => {
                        dispatch({ type: SET_USER_REPOS_ACTION, payload: user });
                    })
                });
        } catch (err) {
            console.log(err);
        }
    }

    const restartBattle = () => {
        dispatch({ type: RESET_BATTLE_ACTION });
        dispatch({ type: SET_RESTART_BTN_ACTION, payload: false });
        dispatch({ type: RESET_SCORE_ACTION });
    }


    return (<>
        <BattleContext.Provider value={{ ...state, dispatch }}>
            <div className='battle'>
                <h1> Let's Get Ready to Rumble 🥊 </h1>
                <UserCards />
                {state.showBattleBtn && <Button title={'▶️Battle!'} handleClick={startBattle} />}
                {state.showRestartBtn && <Button title={'🔄Restart'} handleClick={restartBattle} />}
            </div>
        </BattleContext.Provider>
    </>)
}