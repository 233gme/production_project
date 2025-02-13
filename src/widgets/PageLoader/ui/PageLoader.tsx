import cls from './PageLoader.module.scss';
import { Loader } from 'shared';

export const PageLoader = () => {
	return (
		<div className={cls.wrapper}>
			<Loader/>
		</div>
	);
};
