import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTranslation } from "../../store/features/countries/slice";

import InputLabel from '@mui/material/InputLabel';


export default function SelectTranslation() {

    const { country } = useSelector(state => state.countries);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const selectedTranslation = e.target.value;
        console.log(e.target.value);
        dispatch(setTranslation(selectedTranslation));
    };
    

    if (country && country.translations && Object.keys(country.translations).length) {
        
        return (<>

            <InputLabel>Choose translation:</InputLabel>

            {Object.keys(country.translations).length ?
                <select onChange={handleChange}>
                    {Object.keys(country.translations).map((item, index) =>
                        <option key={index}>
                            {item}
                        </option>
                    )}
                </select> 
            : null}
    
        </>)

    }
    
}