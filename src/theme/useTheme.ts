import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme,
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    const toggleTheme = () => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}