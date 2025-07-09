// @ts-check

import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginStorybook from 'eslint-plugin-storybook'; 

export default [
  eslint.configs.recommended,

  {
    plugins: {
      '@typescript-eslint': tsPlugin,
      storybook: eslintPluginStorybook,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', 
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Storybookの推奨設定をそのまま spread する
  ...eslintPluginStorybook.configs.recommended.overrides.map(override => ({
    ...override,
    rules: {
      ...override.rules,
      // Prettier と競合する ESLint ルールを無効化する設定
      'indent': 'off',
      'quotes': 'off',
      'semi': 'off',
      'comma-dangle': 'off',
      'arrow-parens': 'off',
      'curly': 'off',
      'function-call-spacing': 'off',
      'brace-style': 'off',
      'no-extra-semi': 'off',
      'space-before-function-paren': 'off',
      'space-infix-ops': 'off',
      'keyword-spacing': 'off',

      // Storybookの個別のルールを調整
      'storybook/no-stories-of': 'error', // storiesOfの使用を禁止
    },
  })),

  {
    files: ['stories/**/*.ts', 'stories/**/*.tsx'],
    rules: {
    }
  }
];