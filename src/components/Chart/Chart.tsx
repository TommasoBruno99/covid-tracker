import React, { useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { fetchTotals } from '../../store/actions/data.action';

const Chart: React.FC = (): JSX.Element => {

    const daily = useSelector((state: AppState) => state.totals.daily);
    const singleCountry = useSelector((state: AppState) => state.totals.singleCountry);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTotals('Global'));
    }, [dispatch]);


    const lineChart = <Line
        data={{
            labels: daily.map(d => d.reportDate),
            datasets: [{
                data: daily.map(d => d.deaths),
                label: 'DEATHS',
                borderColor: 'rgb(41, 39, 39)',
                backgroundColor: 'rgba(41, 39, 39, 0.8)',
                fill: true
            },
            {
                data: daily.map(d => d.confirmed),
                label: 'INFECTED',
                borderColor: 'rgba(219, 72, 72)',
                backgroundColor: 'rgba(219, 72, 72, 0.4)',
                fill: true
            }]
        }} />

    const bar = <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgb(219, 72, 72)', 'rgb(43, 139, 43)', 'rgb(41, 39, 39)'],
                data: [singleCountry.confirmed, singleCountry.recovered, singleCountry.deaths]
            }]
        }} />

    return (
        !singleCountry.confirmed ?
            lineChart : bar
    )
}

export default Chart; 