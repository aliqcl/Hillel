import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './features/countries/slice';

export default configureStore({
    reducer: {
        countries: countriesSlice
    }
})