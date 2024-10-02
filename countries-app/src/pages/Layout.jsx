import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import service from "../services/countries";
import {setCountries} from '../store/features/countries/slice';


export default function Layout() {

    const dispatch = useDispatch();


    const getCountries = async () => {
        const response = await service.get();
        dispatch(setCountries(response));
    }

    
    useEffect(() => {
        getCountries();
    }, [])


    return (<>
        <Navigation />
        <Outlet />
    </>)
}