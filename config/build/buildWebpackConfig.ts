import type {BuildOptions} from "./types/config";
import type {Configuration} from "webpack";
import {buildLoaders} from "./bulldLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig (options: BuildOptions): Configuration {
	const {mode, paths, port, isDev} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		module: {
			rules: buildLoaders(isDev),
		},
		resolve: buildResolvers(paths.src),
		plugins: buildPlugins(paths.html, isDev),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(port) : undefined,
	};
}
