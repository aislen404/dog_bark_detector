import React, { useState, useEffect } from 'react';

const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch logs from the API
        fetch('/api/logs')
            .then(response => response.json())
            .then(data => setLogs(data));
    }, []);

    return (
        <div className="logs">
            <h2>Logs</h2>
            <ul>
                {logs.map(log => (
                    <li key={log.id}>
                        {log.timestamp} - {log.event}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Logs;
