import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import NavButton from "../components/Buttons/NavButton";


export default function CountryRoute() {
    return (<>
        <CountryCard />
        <NavButton title='Back to Countries' path='/countries'/>
    </>)
}