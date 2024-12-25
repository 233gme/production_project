import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {WebpackPluginInstance} from "webpack";

export function buildPlugins(templePath: string): WebpackPluginInstance[] {

	return [
		new HtmlWebpackPlugin({
			template: templePath
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}
