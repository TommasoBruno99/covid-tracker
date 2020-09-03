import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { ITotals, IDay } from '../../store/actions/action.types';

interface IChartProps {
    totals: ITotals;
    daily: IDay[],
    isBar: boolean
}

const Chart: React.FC<IChartProps> = ({ totals, daily, isBar }): JSX.Element => {

    const lineChart = <Line
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

    const bar = <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgb(219, 72, 72)', 'rgb(43, 139, 43)', 'rgb(41, 39, 39)'],
                data: [totals.confirmed, totals.recovered, totals.deaths]
            }]
        }} />

    return (
        isBar ? bar : lineChart
    )
}

export default Chart; 