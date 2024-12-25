import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers";
import {AboutPage, MainPage} from "pages";
import {classNames} from "shared";

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
