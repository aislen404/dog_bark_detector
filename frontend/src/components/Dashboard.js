import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import ChartComponent from './ChartComponent';
import { fetchWidgets } from '../services/api';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        fetchWidgets().then(data => setWidgets(data));
    }, []);

    return (
        <div className="dashboard">
            {widgets.map(widget => (
                <Widget key={widget.id} title={widget.title} style={widget.style}>
                    <ChartComponent data={widget.data} />
                </Widget>
            ))}
        </div>
    );
};

export default Dashboard;
