import {FC, useState} from "react";
import cls from './Sitebar.module.scss';
import {classNames} from "shared";
import {ThemeSwitcher} from "widgets";

type Props = {
	className?: string
}

export const Sitebar: FC<Props> = ({className}) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div className={classNames(cls.wrapper, {[cls.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>toggle</button>

			<div className={cls.footer}>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};
