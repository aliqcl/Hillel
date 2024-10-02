import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCountries } from "../../store/features/countries/slice";

import Button from '@mui/material/Button';


export default function CountriesList() {

    const { countries } = useSelector(state => state.countries);
    const dispatch = useDispatch();


    const handleDelete = (id) => {
        const filteredCountries = countries.filter(country => country.id !== id);
        dispatch(setCountries(filteredCountries));
    }


    return (<>

        <h2>Countries List Component</h2>

        {countries.length ?
            <ul>
                {countries.map((item) =>
                    <li key={item.id}>
                        {item.flag} {' '}
                        <Link to={`${item.id}`}>{item.name.official}</Link>
                        <Button variant="outlined" color="error" size="small"
                            style={{ 
                                padding: '2px', 
                                margin: '2px 5px',
                                fontSize: 'small'
                            }}
                        onClick={() => handleDelete(item.id)}>
                            Delete
                        </Button>
                    </li>)}
            </ul> : null}

    </>)
}