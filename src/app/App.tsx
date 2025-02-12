import './styles/index.scss';
import {AppRouter, useTheme} from "app/providers";
import {classNames} from "shared";
import {Navbar, Sitebar} from "widgets";
import {Suspense} from "react";

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar/>

				<div className="content-page">
					<Sitebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	);
};

export default App;
