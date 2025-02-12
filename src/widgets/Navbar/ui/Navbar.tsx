import { FC } from 'react';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme, classNames } from 'shared';

interface Props {
	className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {

	return (
		<header className={classNames(cls.wrapper, {}, [className])}>
			<nav className={cls.nav}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
			</nav>
		</header>
	);
};
