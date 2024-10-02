import { createSlice } from '@reduxjs/toolkit';


export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        country: {},
        selectedTranslation: '',
    },
    reducers: {
        setCountries: (state, { payload }) => {
            state.countries = payload
        },
        setCountry: (state, { payload }) => {
            state.country = payload
        },
        setTranslation: (state, { payload }) => {
            state.selectedTranslation = payload
        },
        deleteCountry: (state, { payload }) => {
            state.countries = payload
        }
    }
})


export const { setCountries, setCountry, setTranslation } = countriesSlice.actions

export default countriesSlice.reducer