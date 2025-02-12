import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ['dist']},
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/ no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    }
  }
];
