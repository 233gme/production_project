import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';

export function buildLoaders (isDev: boolean): RuleSetRule[] {
	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
						namedExport: false,
						exportLocalsConvention: 'as-is',
					},
				},
			},
			'sass-loader',
		],
	};

	const svgLoader: RuleSetRule = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [
		fileLoader,
		svgLoader,
		typescriptLoader,
		cssLoader,
	];
}
