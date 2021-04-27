import React, { useContext } from 'react'
import { setStorage } from '../Utils/Localstorage';
import { ThemeContext } from '../Contexts/ThemeContext';
import { ReactComponent as Moon } from '../assets/moon.svg';

function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);

    function themeSetter() {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setStorage("theme", newTheme);
        return newTheme;
    }

    return (
        <div className="theme-switcher">
            <button onClick={() => setTheme(themeSetter())} className="theme-switcher" title={`Turn ${theme === "dark" ? "on" : "off"} the Light`} alt={`Turn ${theme === "dark" ? "on" : "off"} the Light`} >
                <Moon className={`icon icon-moon ${theme === "dark" ? "icon-moon-on" : "icon-moon-off" }`} />
            </button>
        </div>
    );
}

export default ThemeSwitcher;