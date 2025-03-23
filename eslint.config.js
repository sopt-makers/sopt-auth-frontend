import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";

const ignoresTarget = ['dist', '.yarn', 'styled-system', 'node_modules', '.pnp.cjs', '.pnp.loader.mjs'];

export default tseslint.config(
  { ignores: ignoresTarget },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
)
