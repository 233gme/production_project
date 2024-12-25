import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import type {Configuration} from 'webpack';
import type {BuildEnv} from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const PORT = env.port || 3000;

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT
	});
}
