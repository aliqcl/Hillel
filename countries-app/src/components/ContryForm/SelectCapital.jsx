import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from '../../store/features/countries/slice';


import InputLabel from '@mui/material/InputLabel';


export default function SelectCapital() {

    const { countries } = useSelector(state => state.countries);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const selectedCountry = countries.filter(country => country.capital[0] === e.target.value);
        dispatch(setCountry(selectedCountry[0]));
        console.log(selectedCountry[0]);
    };


    return (<>

        <InputLabel >Choose capital:</InputLabel>
        <select defaultValue={countries[0]?.capital[0]} onChange={handleChange}>
            {countries.map((item) =>
                <option  key={item.id}>
                    {item.capital[0]}
                </option>
            )}
        </select>

    </>)

}