import react from 'eslint-plugin-react'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierRecommended from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jsdoc from 'eslint-plugin-jsdoc'
import typescriptEslint from 'typescript-eslint'

const config = [
    // 通用配置
    {
        ignores: ['**/dist/', '**/public/', 'node_modules/**'],
    },
    // 页面配置
    {
        files: ['admin/**/*.{js,cjs,ts,jsx,tsx,json}'],
        ignores: ['**/.*/*'], //忽略点开头的隐藏文件
        plugins: {
            jsdoc: jsdoc,
            react: react,
        },
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    ecmaVersion: 2020,
                    sourceType: 'module',
                    project: 'admin/tsconfig.json',
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'jsdoc/require-description': 'off',
            'jsdoc/check-values': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            eqeqeq: ['error', 'always'],
        },
    },
    // 服务端配置
    {
        files: ['server/**/*.{js,ts}'],
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
        },
        rules: {
            eqeqeq: 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: 'server/tsconfig.json',
            },
            globals: {
                ...globals.node,
            },
        },
    },
    // 通用推荐配置
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    prettierRecommended,
]

export default config
