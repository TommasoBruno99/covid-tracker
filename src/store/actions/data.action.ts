import { Dispatch } from "react";
import { IFetchTotals, IFetchCountries, GET_COUNTRIES, ICountry, GET_TOTALS, IFetchDaily, GET_DAILY, IDay } from './action.types';

interface ICountriesJsonResp {
    countries: ICountry[]
}

export const fetchCountries = () => async (dispatch: Dispatch<IFetchCountries>) => {
    try {
        const countryJSON: ICountriesJsonResp = await (await fetch('https://covid19.mathdro.id/api/countries')).json();

        dispatch({
            type: GET_COUNTRIES,
            payload: countryJSON.countries.map((country: ICountry) => country)
        });
    } catch (e) {
        console.log(e);
    }
}

interface ITotalsJsonResp {
    confirmed: {
        value: number;
    },
    deaths: {
        value: number;
    },
    recovered: {
        value: number;
    },
    lastUpdate: Date;
}

export const fetchTotals = (country: string) => async (dispatch: Dispatch<IFetchTotals>) => {

    try {
        let url = 'https://covid19.mathdro.id/api/';
        let totalsJSON: ITotalsJsonResp;
        if (country === 'Global') {
            totalsJSON = await (await fetch(url)).json();
        } else {
            totalsJSON = await (await fetch(url + `countries/${country}`)).json();
        }


        dispatch({
            type: GET_TOTALS,
            payload: {
                confirmed: totalsJSON.confirmed.value,
                deaths: totalsJSON.deaths.value,
                recovered: totalsJSON.recovered.value,
                lastUpdate: totalsJSON.lastUpdate
            }
        });
    } catch (e) {
        console.log(e);
    }
}


export const fetchDaily = () => async (dispatch: Dispatch<IFetchDaily>) => {

    try {
        const dailyJSON: IDay[] = await (await fetch('https://covid19.mathdro.id/api/daily')).json();

        dispatch({
            type: GET_DAILY,
            payload: dailyJSON
        });
    } catch (e) {
        console.log(e);
    }
}