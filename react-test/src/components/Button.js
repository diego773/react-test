import React from 'react';
import './Button.css';
import { link } from 'react-router-dom';


function Button({ type = "default", className, children, onClick }) {
    return (
            <button onClick={onClick} className={`btn ${type} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>

            
    )
};

    