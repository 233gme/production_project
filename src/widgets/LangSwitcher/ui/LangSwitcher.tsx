import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import LangIconLight  from "shared/assets/icons/language/lang-light.svg";
import LangIconDark  from "shared/assets/icons/language/lang-dark.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";


interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {theme} = useTheme();
    const {t, i18n} = useTranslation();
    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            title={t('language')}
        >
            {theme === Theme.DARK ? <LangIconLight /> : <LangIconDark />}
        </Button>
    );
};
