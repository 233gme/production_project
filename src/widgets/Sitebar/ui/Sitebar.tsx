import { FC, useState } from 'react';
import cls from './Sitebar.module.scss';
import { classNames } from 'shared';
import { LanguageSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';

type Props = {
	className?: string
}

export const Sitebar: FC<Props> = ({ className }) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div className={classNames(cls.wrapper, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>{t('toggle')}</button>

			<div className={cls.footer}>
				<ThemeSwitcher/>
				<LanguageSwitcher/>
			</div>
		</div>
	);
};
