import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins (templePath: string, isDev: boolean): WebpackPluginInstance[] {

	const plugins = [
		new HtmlWebpackPlugin({
			template: templePath,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin);
		plugins.push(new HotModuleReplacementPlugin());
	}

	return plugins;
}
