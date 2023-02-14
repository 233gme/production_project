import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPages'
import { AboutPage } from 'pages/AboutPages'
import { NotFound } from 'pages/NotFound'

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
}
