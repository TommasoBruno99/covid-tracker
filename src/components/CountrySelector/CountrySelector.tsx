import React, { useEffect } from 'react';
import Select from 'react-select';

import './CountrySelector.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, fetchTotals, fetchSingleCountry } from '../../store/actions/data.action';
import { AppState } from '../../store/store';


const CountrySelector: React.FC = (): JSX.Element => {

    const countries = useSelector((state: AppState) => state.totals.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    let options = countries.map(country => ({
        value: country,
        label: country,
    }));

    options = [{ value: 'Global', label: 'Global' }, ...options];

    const handleChange = ({ value }: any) => {
        dispatch(fetchTotals(value));
        if (value !== 'Global')
            dispatch(fetchSingleCountry(value));
    }

    return (
        <Select
            onChange={handleChange}
            className="selection"
            options={options}
            defaultValue={options[0]}

        />
    )
}

export default CountrySelector;