import { ITotal, totalsType, FETCH_TOTALS, FETCH_DAILY, FETCH_COUNTRIES, FETCH_COUNTRY } from "../actions/action.types";

const initialState: ITotal = {
    lastUpdate: undefined,
    recovered: 0,
    deaths: 0,
    infected: 0,
    daily: [],
    countries: [],
    singleCountry: {
        deaths: 0,
        recovered: 0,
        confirmed: 0
    }
}

const dataReducer = (state = initialState, action: totalsType): ITotal => {

    switch (action.type) {

        case FETCH_TOTALS:
            return {
                ...state,
                recovered: action.recovered,
                deaths: action.deaths,
                infected: action.infected,
                lastUpdate: action.lastUpdate,
                singleCountry: { deaths: 0, recovered: 0, confirmed: 0 }
            }

        case FETCH_DAILY:
            return {
                ...state,
                daily: action.payload,
                singleCountry: { deaths: 0, recovered: 0, confirmed: 0 }
            }

        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                singleCountry: { deaths: 0, recovered: 0, confirmed: 0 }
            }

        case FETCH_COUNTRY:
            return {
                ...state,
                singleCountry: action.payload
            }
        default: return state;
    }
}

export default dataReducer;