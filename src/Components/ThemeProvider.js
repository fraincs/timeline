import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import { ThemeWatcher } from '../Utils/ThemeDetector';

function ThemeProvider(props) {
    const { theme } =  useContext(ThemeContext);
    ThemeWatcher();

    return (
        <div className={`theme theme-${theme}`}>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default ThemeProvider;