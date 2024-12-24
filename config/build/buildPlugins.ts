import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin} from "webpack";
import type {WebpackPluginInstance} from "webpack";

export function buildPlugins(templePath: string): WebpackPluginInstance[] {

	return [
		new HtmlWebpackPlugin({
			template: templePath
		}),
		new ProgressPlugin()
	]
}
