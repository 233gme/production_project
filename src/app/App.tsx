import './styles/index.scss';
import {AppRouter, useTheme} from "app/providers";
import {classNames} from "shared";
import {Navbar} from "widgets";

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>

			<AppRouter/>
		</div>
	);
};

export default App;
