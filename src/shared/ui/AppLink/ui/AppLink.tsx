import {FC} from "react";
import cls from "./AppLink.module.scss";
import {classNames} from "shared";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface Props extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = ({className, to, children, theme = AppLinkTheme.PRIMARY, ...overProps}) => {

	return (
		<Link to={to} className={classNames(cls.wrap, {}, [className, cls[theme]])}{...overProps}>
			{children}
		</Link>
	);
};
