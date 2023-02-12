import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import LangIcon from "shared/assets/icons/lang.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
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
            <LangIcon/>
        </Button>
    );
};
