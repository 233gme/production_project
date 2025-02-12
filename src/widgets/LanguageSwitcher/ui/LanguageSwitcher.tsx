import {useTranslation} from "react-i18next";
import {Button, ButtonVariant} from "shared";

export const LanguageSwitcher = () => {
	const {t, i18n} = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return <Button variant={ButtonVariant.CLEAR_ICON} onClick={toggleLanguage}>{t('switch')}</Button>;
};
