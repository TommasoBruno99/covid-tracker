import { IFetchCountries, IFetchTotals, FETCH_TOTALS, IFetchDaily, FETCH_DAILY, ISingleDay, FETCH_COUNTRIES, IFetchCountry, FETCH_COUNTRY } from "./action.types";
import { Dispatch } from "react";

interface IFetchTotalResp {
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

export const fetchTotals = (country: string) => (dispatch: Dispatch<IFetchTotals>) => {

    let url = 'https://covid19.mathdro.id/api/';
    if (country !== 'Global') url = `https://covid19.mathdro.id/api/countries/${country}`;

    fetch(url)
        .then(res => res.json())
        .then((result: IFetchTotalResp) => {


            dispatch({
                type: FETCH_TOTALS,
                infected: result.confirmed.value,
                deaths: result.deaths.value,
                recovered: result.recovered.value,
                lastUpdate: result.lastUpdate
            })
        })
        .catch(e => console.log(e.message));
}

interface IFetchDailyResp {
    deaths: {
        total: number;
    },
    confirmed: {
        total: number;
    }
}

export const fetchDaily = () => (dispatch: Dispatch<IFetchDaily>) => {

    fetch('https://covid19.mathdro.id/api/daily')
        .then(res => res.json())
        .then(result => {


            const payload: ISingleDay[] = result.map((res: IFetchDailyResp) => ({
                deaths: res.deaths.total,
                confirmed: res.confirmed.total
            }));
            dispatch({
                type: FETCH_DAILY,
                payload: payload
            });

        })
        .catch(e => console.log(e));
}

interface IFetchCountriesResp {
    name: string;

}

export const fetchCountries = () => (dispatch: Dispatch<IFetchCountries>) => {
    fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then(result => {


            const payload: string[] = result.countries.map((res: IFetchCountriesResp) => res.name);

            dispatch({
                type: FETCH_COUNTRIES,
                payload: payload
            });
        })
        .catch(e => console.log(e));
}


export const fetchSingleCountry = (country: string) => (dispatch: Dispatch<IFetchCountry>) => {

    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(res => res.json())
        .then(result => {
            const payload = {
                confirmed: result.confirmed.value,
                recovered: result.recovered.value,
                deaths: result.recovered.value
            }

            dispatch({
                type: FETCH_COUNTRY,
                payload: payload
            });
        })
        .catch(e => console.log(e));
}