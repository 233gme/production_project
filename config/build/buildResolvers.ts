import type {ResolveOptions} from "webpack";

export function buildResolvers (path: string): ResolveOptions {

	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [path, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
