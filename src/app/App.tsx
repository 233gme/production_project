import './styles/index.scss';
import { AppRouter, useTheme } from 'app/providers';
import { classNames } from 'shared';
import { Navbar, Sitebar } from 'widgets';

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
