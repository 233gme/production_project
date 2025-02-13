import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { ROUTE_CONFIG } from 'shared/config';
import { PageLoader } from 'widgets';

export const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<div className="page-wrapper">
				<Routes>
					{
						ROUTE_CONFIG.map(({ path, element }) => <Route key={path} path={path} element={element}/>)
					}
				</Routes>
			</div>
		</Suspense>
	);
};
