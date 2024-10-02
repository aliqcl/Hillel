import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectCapital from "./SelectCapital";
import SelectTranslation from "./SelectTranslation";
import NavButton from '../Buttons/NavButton';


export default function CountryForm() {

    const { country, selectedTranslation } = useSelector(state => state.countries);

    return (<div className="select__form">

        <SelectCapital />
        <SelectTranslation />

        {country && country.translations && Object.keys(country.translations).length && selectedTranslation ?
            <NavButton title={`Read more about ${country.name.official}`} path={`/countries/${country.id}?translation=${selectedTranslation}`} />
        : null}

    </div>)

}
