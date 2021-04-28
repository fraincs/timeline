import { useContext } from 'react'
import { getStorage } from './Localstorage';
import { ThemeContext } from '../Contexts/ThemeContext';

const storedTheme = getStorage("theme");

function ThemeWatcher() {
    // watch for theme change os wise
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const { setTheme } = useContext(ThemeContext);

    mql.addEventListener("change", (e) => {
        const isDark = e.matches;
        isDark && !storedTheme ? setTheme("dark") : setTheme("light");
    });
}

const ThemeDetector = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemPreference = prefersDark ? "dark" : "light";
    const initialTheme = storedTheme ? storedTheme : systemPreference;

    return initialTheme;
}

export { ThemeDetector, ThemeWatcher };