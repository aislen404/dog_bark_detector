import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dog Bark Detector</h1>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logs">Logs</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
