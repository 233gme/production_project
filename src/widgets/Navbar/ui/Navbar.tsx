import { FC } from 'react';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme, classNames } from 'shared';
import { useTranslation } from 'react-i18next';

interface Props {
	className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<header className={classNames(cls.wrapper, {}, [className])}>
			<nav className={cls.nav}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Home')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
			</nav>
		</header>
	);
};
