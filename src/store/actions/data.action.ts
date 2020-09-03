import { IFetchTotals, FETCH_TOTALS, IFetchDaily, FETCH_DAILY } from "./action.types";
import { Dispatch } from "react";

export const fetchTotals = () => (dispatch: Dispatch<IFetchTotals>) => {

    fetch('https://covid19.mathdro.id/api/')
        .then(res => res.json())
        .then((result) => {

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


export const fetchDaily = () => (dispatch: Dispatch<IFetchDaily>) => {
    fetch('https://covid19.mathdro.id/api/daily')
        .then(res => res.json())
        .then(result => {
            dispatch({
                type: FETCH_DAILY,
                payload: result
            });
        })
        .catch(e => console.log(e));
}
