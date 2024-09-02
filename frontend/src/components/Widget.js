import React from 'react';

const Widget = ({ title, style, children }) => {
    return (
        <div className="widget" style={style}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default Widget;
