import {FC} from "react";
import {useTheme} from "app/providers";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme, classNames} from "shared";

interface Props {
	className?: string;
}

export const Navbar: FC<Props> = ({className}) => {
	const {toggleTheme} = useTheme();

	return (
		<header className={classNames(cls.header, {}, [className])}>
			<button onClick={toggleTheme}>Toggle theme</button>

			<nav className={cls.nav}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
			</nav>
		</header>
	);
};
