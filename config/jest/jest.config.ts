/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'/node_modules/',
	],
	moduleDirectories: [
		'node_modules',
	],
	moduleFileExtensions: [
		'js',
		'mjs',
		'cjs',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	rootDir: '../../',
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^shared$': '<rootDir>/src/shared',
		'^shared/(.*)$': '<rootDir>/src/shared/$1',
	},
};

export default config;
