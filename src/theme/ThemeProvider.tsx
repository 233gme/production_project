import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext";
import {FC, PropsWithChildren, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState(defaultTheme);

	const defaultValues = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultValues}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
