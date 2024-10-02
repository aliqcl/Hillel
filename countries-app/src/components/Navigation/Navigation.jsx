import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

import List from '@mui/material/List';


export default function Navigation() {

    const menu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Countries',
            path: '/countries'
        }
    ]

    return (
        <nav>
            <List>
                {menu.map((item, index) =>
                    <li key={index}>
                        <NavLink to={item.path}> {item.title} </NavLink>
                    </li>
                )}
            </List>
        </nav>
    )
}