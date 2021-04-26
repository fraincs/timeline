import React, { useEffect, useState } from 'react'
import { setStorage, getStorage } from "../utils/localstorage";

function ThemeProvider(props) {
    const prefersDarkness = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDarkness === true ? "dark" : "light";
    const [theme, setTheme] = useState(getStorage("theme") ? getStorage("theme") : systemTheme);
    setStorage("theme", theme);

    useEffect(() => {
        const storedTheme = getStorage("theme");
        setStorage("theme", storedTheme);
        setTheme(storedTheme);
    }, []);

    return (
        <div className={`${theme} theme`}>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default ThemeProvider;