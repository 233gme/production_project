import type {FC} from "react";
import {useTheme} from "app/providers";
import {Button, ButtonVariant} from "shared";
import SunIcon from "shared/assets/icons/sun.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import {Theme} from "app/providers/ThemeProvider/lib";

interface Props {
	className?: string;
}

export const ThemeSwitcher: FC<Props> = ({className}) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button variant={ButtonVariant.CLEAR_ICON} onClick={toggleTheme}>
			{
				theme === Theme.LIGHT ? <MoonIcon/> : <SunIcon/>
			}
		</Button>
	);
};
