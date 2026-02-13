// @ts-check

import eslint from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginStorybook from "eslint-plugin-storybook";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import * as mdx from "eslint-plugin-mdx";
import globals from "globals";

export default [
  eslint.configs.recommended,

  // MDX configuration
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      ...mdx.flat.rules,
      "no-unused-vars": "off", // MDX often has false positives for unused vars
    },
    languageOptions: {
      ...(mdx.flat.languageOptions || {}),
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ...(mdx.flat.languageOptions?.parserOptions || {}),
        project: null,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...(mdx.flat.languageOptions?.globals || {}),
      },
    },
  },
  {
    ...mdx.flatCodeBlocks,
  },
  {
    files: ["**/*.mdx/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...mdx.flatCodeBlocks.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/jsx-no-undef": "off", // Often used in examples without import in same block
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/*.mdx/**"], // Ignore MDX code blocks in the main TS config
    plugins: {
      "@typescript-eslint": tsPlugin,
      storybook: eslintPluginStorybook,
      "jsx-a11y": jsxA11y,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Vite based projects don't need React in scope
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Storybook overrides
  ...eslintPluginStorybook.configs.recommended.overrides.map((override) => ({
    ...override,
    rules: {
      ...override.rules,
      indent: "off",
      quotes: "off",
      semi: "off",
      "comma-dangle": "off",
      "arrow-parens": "off",
      curly: "off",
      "function-call-spacing": "off",
      "brace-style": "off",
      "no-extra-semi": "off",
      "space-before-function-paren": "off",
      "space-infix-ops": "off",
      "keyword-spacing": "off",
      "storybook/no-stories-of": "error",
    },
  })),

  {
    files: ["stories/**/*.ts", "stories/**/*.tsx"],
    rules: {
      "jsx-a11y/no-autofocus": "off",
    },
  },
];
