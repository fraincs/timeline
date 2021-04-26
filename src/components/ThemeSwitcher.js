import React, { useEffect, useState } from 'react'
import { setStorage, getStorage } from "../utils/localstorage";
import { ReactComponent as Moon } from '../assets/moon.svg';

function ThemeSwitcher() {
    const prefersDarkness = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDarkness === true ? "dark" : "light"
    const [theme, setTheme] = useState(getStorage("theme") ? getStorage("theme") : systemTheme);
    setStorage("theme", theme);

    useEffect(() => {
        const storedTheme = getStorage("theme");
        setStorage("theme", storedTheme);
        setTheme(storedTheme);
    }, []);

    function themeSetter() {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
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