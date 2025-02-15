import type { Configuration } from 'webpack-dev-server';

export function buildDevServer (port: number): Configuration {

	return {
		port,
		open: false,
		historyApiFallback: true,
		hot: true,
	};
}
