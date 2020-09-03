import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card/Card';
import { AppState } from '../../store/store';
import { fetchDaily } from '../../store/actions/data.action';

import './Cards.css';

const Cards: React.FC = (): JSX.Element => {

    const confirmed = useSelector((state: AppState) => state.totals.infected);
    const deaths = useSelector((state: AppState) => state.totals.deaths);
    const recovered = useSelector((state: AppState) => state.totals.recovered);
    const date = useSelector((state: AppState) => state.totals.lastUpdate);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDaily());
    }, [dispatch]);


    return (
        <div className="card-wrapper">
            <Card number={confirmed} date={date} info={'Infected'} bottomBar={'active'} description={'Number of people infected by COVID19'} />
            <Card number={deaths} date={date} info={'Deaths'} bottomBar={'death'} description={'Number of people who died by COVID19'} />
            <Card number={recovered} date={date} info={'Recovered'} bottomBar={'recovered'} description={'Number of recoveries from COVID19'} />
        </div>
    )
}

export default Cards; 