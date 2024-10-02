import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/countries";
import { useSelector, useDispatch } from "react-redux";
import { setCountry, setCountries } from "../../store/features/countries/slice";
import CountryInfo from './CountryInfo';

import Button from '@mui/material/Button';


export default function CountryCard() {

    const { countryId } = useParams();

    const { country, selectedTranslation, countries } = useSelector(state => state.countries);
    const dispatch = useDispatch();


    const getCountry = async () => {
        const response = await service.get(countryId);
        dispatch(setCountry(response));
    }

    const handleDelete = (id) => {
        const filteredCountries = countries.filter(country => country.id !== id);
        dispatch(setCountries(filteredCountries));
        dispatch(setCountry({}));
    }


    useEffect(() => {
        getCountry();
    }, [])


    return (<>

        {selectedTranslation && selectedTranslation.length > 0 ? (
            country.translations[selectedTranslation] ? (
                <h2>{country.translations[selectedTranslation].official}</h2>
            ) : (
                <h2>{country?.name?.official}</h2>
            )
        ) : (
            <h2>{country?.name?.official}</h2>
        )}

        <CountryInfo country={country} />

        <Button variant="outlined" color="error" size="small"
            style={{ 
                padding: '2px', 
                margin: '2px 5px',
                fontSize: 'small'
            }}
        onClick={() => handleDelete(country.id)}>
            Delete
        </Button>

    </>)

}