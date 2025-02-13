import { useTheme } from 'app/providers';
import { Button, ButtonVariant } from 'shared';
import { Theme } from 'app/providers/ThemeProvider/lib';
import { MoonIcon, SunIcon } from 'shared/assets';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();
	const ThemeIcon = theme === Theme.LIGHT ? <MoonIcon/> : <SunIcon/>;

	return (
		<Button variant={ButtonVariant.CLEAR_ICON} onClick={toggleTheme}>
			{ThemeIcon}
		</Button>
	);
};
