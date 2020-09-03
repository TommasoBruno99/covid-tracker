import { combineReducers } from 'redux';
import dataReducer from './data.reducer';


const rootReducer = combineReducers({
    totals: dataReducer
});

export default rootReducer;