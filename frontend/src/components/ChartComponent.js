import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: data.label,
                data: data.values,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return <Line data={chartData} />;
};

export default ChartComponent;
