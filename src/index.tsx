import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, ThemeProvider } from 'app/providers';

import './shared/config/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
