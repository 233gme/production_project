import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export const PageError = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={cls.wrapper}>
			<h1>{t('error')}</h1>
			<button onClick={reloadPage}>{t('reloadPage')}</button>
		</div>
	);
};
