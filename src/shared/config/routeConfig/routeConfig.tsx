import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import type {RouteProps} from "react-router-dom";

export enum RouteConfig {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePath: Record<RouteConfig, string> = {
	[RouteConfig.MAIN]: '/',
	[RouteConfig.ABOUT]: '/about',
};

export const ROUTE_CONFIG: RouteProps[] = [
	{
		path: RoutePath.main,
		element: <MainPage/>,
	},
	{
		path: RoutePath.about,
		element: <AboutPage/>,
	},
];
