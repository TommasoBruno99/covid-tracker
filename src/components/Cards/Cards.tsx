import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Cards.css';

import Card from './Card/Card';
import { AppState } from '../../store/store';
import { fetchTotals } from '../../store/actions/data.action';
import { ITotals } from '../../store/actions/action.types';

const Cards: React.FC = (): JSX.Element => {

    const totals: ITotals = useSelector((state: AppState) => state.dataReducer.totals);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTotalsAPI = async () => {
            dispatch(await fetchTotals('Global'));
        }

        fetchTotalsAPI();
    }, [dispatch]);


    return (
        <div className="card-wrapper">
            <Card number={totals.confirmed} date={totals.lastUpdate} info={'Infected'} bottomBar={'active'} description={'Number of people infected by COVID19'} />
            <Card number={totals.deaths} date={totals.lastUpdate} info={'Deaths'} bottomBar={'death'} description={'Number of people who died by COVID19'} />
            <Card number={totals.recovered} date={totals.lastUpdate} info={'Recovered'} bottomBar={'recovered'} description={'Number of recoveries from COVID19'} />
        </div>
    )
}

export default Cards; 