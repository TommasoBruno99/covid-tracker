import { ITotal, totalsType, FETCH_TOTALS, FETCH_DAILY } from "../actions/action.types";

const initialState: ITotal = {
    lastUpdate: undefined,
    recovered: 0,
    deaths: 0,
    infected: 0,
    daily: []
}

const dataReducer = (state = initialState, action: totalsType): ITotal => {

    switch (action.type) {

        case FETCH_TOTALS:
            return {
                ...state,
                recovered: action.recovered,
                deaths: action.deaths,
                infected: action.infected,
                lastUpdate: action.lastUpdate
            }

        case FETCH_DAILY:
            return {
                ...state,
                daily: action.payload
            }
        default: return state;
    }
}

export default dataReducer;