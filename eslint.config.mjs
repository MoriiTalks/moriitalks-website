import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

const commentRules = {
  rules: {
    'no-semicolons': {
      meta: { type: 'suggestion', schema: [] },
      create(context) {
        return {
          Program() {
            for (const comment of context.sourceCode.getAllComments()) {
              if (comment.value.includes(';')) {
                context.report({
                  loc: comment.loc,
                  message: 'Use a comma instead of a semicolon in comments.',
                });
              }
            }
          },
        };
      },
    },
  },
};

export default defineConfig([
  ...nextVitals,
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': true, 'ts-ignore': true, 'ts-nocheck': true, 'ts-check': false },
      ],
    },
  },
  {
    plugins: { comments: commentRules },
    linterOptions: { noInlineConfig: true, reportUnusedDisableDirectives: 'error' },
    rules: {
      'comments/no-semicolons': 'error',
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'next-env.d.ts']),
]);
