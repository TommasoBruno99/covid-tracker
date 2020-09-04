import React, { useEffect, useState } from 'react';

import './App.css';

// Components
import Chart from './Chart/Chart';
import Cards from './Cards/Cards';
import CountrySelector from './CountrySelector/CountrySelector';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/store';
import { fetchCountries, fetchTotals, fetchDaily } from '../store/actions/data.action';
import { ValueType, OptionTypeBase } from 'react-select';

interface IOptionsChange {
    value: string;
}


const App: React.FC = (): JSX.Element => {

    const countries = useSelector((state: AppState) => state.dataReducer.countries);
    const totals = useSelector((state: AppState) => state.dataReducer.totals);
    const daily = useSelector((state: AppState) => state.dataReducer.daily);

    const [isBar, setBar] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            dispatch(await fetchCountries());
            dispatch(await fetchDaily());
        }
        fetchCountriesAPI();
    }, [dispatch]);

    const handleChangeCountry = async (newValue: ValueType<OptionTypeBase>) => {
        const countryName = (newValue as IOptionsChange).value;
        if (countryName === 'Global') {
            dispatch(await fetchDaily());
            setBar(false);
        } else setBar(true);
        dispatch(await fetchTotals(countryName));
    }

    return (
        <div className="main-div">
            <h1 className="title"> COVID19 TRACKER By Tommaso Bruno</h1>
            <div className="wrapper">
                <Cards />
                <CountrySelector countries={countries} onChange={handleChangeCountry} />
                <Chart totals={totals} daily={daily} isBar={isBar} />
            </div>

        </div>
    )
}

export default App;