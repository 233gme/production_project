import { AppRouter, useTheme } from 'app/providers';
import { classNames } from 'shared';
import { Navbar, Sitebar } from 'widgets';

import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>

			<div className="content-page">
				<Sitebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
