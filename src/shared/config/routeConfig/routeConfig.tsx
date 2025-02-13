import { AboutPage, MainPage, NotFoundPage } from 'pages';
import type { RouteProps } from 'react-router-dom';

export enum RouteConfig {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<RouteConfig, string> = {
	[RouteConfig.MAIN]: '/',
	[RouteConfig.ABOUT]: '/about',
	[RouteConfig.NOT_FOUND]: '*',
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
	{
		path: RoutePath.not_found,
		element: <NotFoundPage/>,
	},
];
