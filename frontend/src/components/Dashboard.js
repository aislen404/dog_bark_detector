import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        fetch('/api/widgets')
            .then(response => response.json())
            .then(data => setWidgets(data));
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
