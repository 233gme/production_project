import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwicher";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <ThemeSwitcher />
            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={classNames(cls.mainLink)}
                    to={'/'}>
                    Main
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
