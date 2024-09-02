import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [sensitivity, setSensitivity] = useState(0.3);
    const [mode, setMode] = useState('automatic');
    const [frequency, setFrequency] = useState(25000);
    const [duration, setDuration] = useState(0.5);

    useEffect(() => {
        // Fetch the current settings from the API
        fetch('/api/settings')
            .then(response => response.json())
            .then(data => {
                setSensitivity(data.sensitivity);
                setMode(data.mode);
                setFrequency(data.frequency);
                setDuration(data.duration);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the settings via the API
        fetch('/api/settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sensitivity, mode, frequency, duration }),
        });
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Sensitivity:
                    <input
                        type="number"
                        value={sensitivity}
                        onChange={(e) => setSensitivity(e.target.value)}
                        min="0.1"
                        max="1.0"
                        step="0.1"
                    />
                </label>
                <label>
                    Mode:
                    <select value={mode} onChange={(e) => setMode(e.target.value)}>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                    </select>
                </label>
                {mode === 'manual' && (
                    <>
                        <label>
                            Frequency (Hz):
                            <input
                                type="number"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                min="20000"
                                max="40000"
                            />
                        </label>
                        <label>
                            Duration (s):
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                min="0.1"
                                max="5.0"
                                step="0.1"
                            />
                        </label>
                    </>
                )}
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;
