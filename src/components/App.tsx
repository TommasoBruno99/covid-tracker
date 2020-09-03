import React, { useEffect } from 'react';

import './App.css';
import Card from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/store';
import { fetchTotals, fetchDaily } from '../store/actions/data.action';
import Chart from './Chart/Chart';


const App: React.FC = (): JSX.Element => {

    const confirmed = useSelector((state: AppState) => state.totals.infected);
    const deaths = useSelector((state: AppState) => state.totals.deaths);
    const recovered = useSelector((state: AppState) => state.totals.recovered);
    const date = useSelector((state: AppState) => state.totals.lastUpdate);

    const daily = useSelector((state: AppState) => state.totals.daily);


    const dispatch = useDispatch();
    console.log(typeof date);

    useEffect(() => {
        dispatch(fetchTotals());
        dispatch(fetchDaily());
    }, [dispatch]);

    return (
        <div className="main-div">
            <h1 className="title"> COVID19 TRACKER </h1>
            <div className="wrapper">
                <div className="card-wrapper">
                    <Card number={confirmed} date={date} info={'Infected'} bottomBar={'active'} description={'Number of people infected by COVID19'} />
                    <Card number={deaths} date={date} info={'Deaths'} bottomBar={'death'} description={'Number of people who died by COVID19'} />
                    <Card number={recovered} date={date} info={'Recovered'} bottomBar={'recovered'} description={'Number of recoveries from COVID19'} />
                </div>
            </div>
            <Chart daily={daily} />
        </div>
    )
}

export default App;