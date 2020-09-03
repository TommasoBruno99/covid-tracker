import React from 'react';
import Select, { ValueType, OptionTypeBase } from 'react-select';

import './CountrySelector.css';
import { ICountry } from '../../store/actions/action.types';

interface ICountrySelectorProps {
    countries: ICountry[];
    onChange: (newValue: ValueType<OptionTypeBase>) => void;
}

const CountrySelector: React.FC<ICountrySelectorProps> = ({ countries, onChange }): JSX.Element => {
    let options = countries.map(country => ({
        value: country.name,
        label: country.name,
    }));

    options = [{ value: 'Global', label: 'Global' }, ...options];


    return (
        <Select
            className="selection"
            options={options}
            defaultValue={options[0]}
            onChange={onChange}
        />
    )
}

export default CountrySelector;