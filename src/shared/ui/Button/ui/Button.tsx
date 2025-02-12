import cls from './Button.module.scss';
import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared';

export enum ButtonVariant {
	CLEAR = 'clear',
	CLEAR_ICON = 'clear-icon',
	OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export const Button: FC<Props> = ({ variant = ButtonVariant.CLEAR, children, ...otherProps }) => {
	return (
		<button className={classNames(cls.btn, {}, [cls[variant]])} {...otherProps}>
			{children}
		</button>
	);
};
