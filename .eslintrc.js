module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'airbnb-base/rules/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:jest/all',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react-hooks', 'unicorn'],
  rules: {
    // unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/throw-new-error': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],

    // Jest
    // Maybe we need to enable this? https://stackoverflow.com/questions/50816254/necessary-to-use-expect-assertions-if-youre-awaiting-any-async-function-calls
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/require-top-level-describe': 'off',

    'react/react-in-jsx-scope': 'off',

    // TypeScript rules
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: false,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
    eqeqeq: 1,
    '@typescript-eslint/no-empty-interface': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/unbound-method': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Imports
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.test.tsx',
          '**/*.spec.tsx',
          '**/__test__/*',
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        '*/**/*.{spec,test}.{ts,tsx}',
        '**/__mocks__/*.{ts,tsx}',
        '**/__test__/*.{ts,tsx}',
      ],
      env: {
        jest: true,
      },
      rules: {
        'max-statements': ['error', { max: 14 }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
      },
    },
    {
      files: ['*/**/*.js'],

      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  globals: {
    React: 'writable'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}