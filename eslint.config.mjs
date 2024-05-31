import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
   {
      plugins: {
         '@typescript-eslint': tseslint.plugin,
         react: eslintReact,
         'react-hooks': eslintReactHooks,
         'react-refresh': eslintReactRefresh,
         prettier: prettierPlugin,
      },
   },
   {
      ignores: [
         'dist',
         'node_modules',
         'coverage',
         'eslint.config.js',
         'tsconfig.json',
         'tsconfig.node.json',
         'eslint.config.mjs',
         'webpack.config.json',
         'webpack.config.js',
         'build',
      ],
   },
   js.configs.recommended,
   ...tseslint.configs.recommended,
   {
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.es2020,
         },
         parserOptions: {
            project: ['tsconfig.json', 'tsconfig.node.json'],
         },
      },
   },
   {
      files: ['**/*.{ts,tsx}'],
      rules: {
         'prettier/prettier': ['warn'],
         // rules added after update eslint
         'react-hooks/exhaustive-deps': ['warn'],
         'max-len': 'off',
         'react/jsx-indent': 'off',
         'react/jsx-wrap-multilines': 'warn',
         'no-shadow': 'off',
         '@typescript-eslint/no-shadow': 'error',
         '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, variables: false },
         ],
         // old rules
         'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
         'prefer-destructuring': ['error', { object: true, array: false }],
         'no-unused-expressions': ['error', { allowShortCircuit: true }],
         'class-methods-use-this': 'off',
         'import/no-cycle': 'off',
         'react/sort-comp': 'off',
         'react/require-default-props': 'off',
         'react/jsx-props-no-spreading': 'off',
         'react/jsx-fragments': 'off',
         'import/no-named-as-default': 'off',
         'react/jsx-closing-tag-location': 'off',
         'no-unused-vars': 'off',
         camelcase: 'off',
         'no-restricted-globals': 'off',
         'react/no-array-index-key': 'off',
         'lines-between-class-members': 'off',
         'react/no-did-update-set-state': 'off',
         'no-else-return': 'off',
         'react/jsx-tag-spacing': 'off',
         'react/jsx-closing-bracket-location': 'off',
         'react/jsx-boolean-value': 'off',
         'jsx-a11y/label-has-associated-control': 'off',
         'prefer-object-spread': 'off',
         'no-self-assign': 'off',
         'no-use-before-define': 'off',
         'react/prefer-stateless-function': 'off',
         'react/jsx-curly-brace-presence': 'off',
         'no-underscore-dangle': 'off',
         'import/no-duplicates': 'off',
         'jsx-a11y/click-events-have-key-events': 'off',
         'jsx-a11y/no-static-element-interactions': 'off',
         'react/state-in-constructor': 'off',
         'import/newline-after-import': 'off',
         'import/order': 'off',
         'no-console': 'off',
         '@typescript-eslint/camelcase': 'off',
         '@typescript-eslint/ban-ts-ignore': 'off',
         'import/no-unresolved': 'off',
         'react/prop-types': 'off',
         'react/jsx-filename-extension': 'off',
         'react/forbid-prop-types': 'off',
         'react/no-deprecated': 'off',
         'prefer-const': 'off',
         'react/no-unused-prop-types': 'off',
         'no-empty': 'off',
         'object-shorthand': 'off',
         'import/extensions': 'off',
         'import/prefer-default-export': 'off',
         'react/jsx-curly-newline': 'off',
         '@typescript-eslint/quotes': [
            'warn',
            'single',
            { allowTemplateLiterals: true },
         ],
         'max-classes-per-file': 'off',
         'react/react-in-jsx-scope': 'off',
      },
   },
);
