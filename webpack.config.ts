import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const paths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'dist'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
}

const mode = 'development'

const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
	mode,
	paths,
	isDev,
});

export default config;
