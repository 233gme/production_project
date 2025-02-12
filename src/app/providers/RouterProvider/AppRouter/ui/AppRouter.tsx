import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { ROUTE_CONFIG } from 'shared/config';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
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
