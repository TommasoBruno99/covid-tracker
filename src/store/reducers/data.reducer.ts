import { IState, dataActions, GET_COUNTRIES, GET_TOTALS, GET_DAILY } from '../actions/action.types';

const initialState: IState = {
    countries: [],
    totals: {
        recovered: 0,
        confirmed: 0,
        deaths: 0,
        lastUpdate: undefined,
    },
    daily: [],
    isBar: false
}

const dataReducer = (state = initialState, action: dataActions): IState => {

    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_TOTALS:
            return {
                ...state,
                totals: action.payload
            }
        case GET_DAILY:
            return {
                ...state,
                daily: action.payload
            }
        default: return state;
    }
}

export default dataReducer;