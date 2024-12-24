import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders} from "./bulldLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const {mode, paths} = options

	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true
		},
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(paths.html),
	};
}
