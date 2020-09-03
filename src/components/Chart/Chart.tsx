import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { fetchTotals } from '../../store/actions/data.action';

const Chart: React.FC = (): JSX.Element => {

    const daily = useSelector((state: AppState) => state.totals.daily);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTotals());
    }, [dispatch]);

    return (
        <Line
            data={{
                labels: daily.map(d => d.reportDate),
                datasets: [{
                    data: daily.map(d => d.deaths.total),
                    label: 'DEATHS',
                    borderColor: 'rgb(41, 39, 39)',
                    backgroundColor: 'rgba(41, 39, 39, 0.8)',
                    fill: true
                },
                {
                    data: daily.map(d => d.confirmed.total),
                    label: 'INFECTED',
                    borderColor: 'rgba(219, 72, 72)',
                    backgroundColor: 'rgba(219, 72, 72, 0.4)',
                    fill: true
                }]
            }} />
    )
}

export default Chart; 