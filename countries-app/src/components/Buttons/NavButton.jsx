import React from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';


export default function NavButton({ title, path }) {

    const navigation = useNavigate();

    return (<Button variant="contained" color="success" size="small"
        style={{
            padding: '2px 9px',
            margin: '2px 5px',
            fontSize: 'small'
        }}
        onClick={() => navigation(path)}>
        {title}
    </Button>)

}