import {FC} from "react";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme, classNames} from "shared";
import {ThemeSwitcher} from "widgets";

interface Props {
	className?: string;
}

export const Navbar: FC<Props> = ({className}) => {

	return (
		<header className={classNames(cls.header, {}, [className])}>
			<ThemeSwitcher/>

			<nav className={cls.nav}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
			</nav>
		</header>
	);
};
