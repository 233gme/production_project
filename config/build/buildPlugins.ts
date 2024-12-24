import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, ProgressPlugin} from "webpack";

export function buildPlugins(templePath: string): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: templePath
		}),
		new ProgressPlugin()
	]
}
