import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
    {languageOptions: { globals: globals.browser }},
    {
        ignores: ["node_modules", "dist"]
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { files: ["**/*.{js,ts,tsx}"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off', 
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            '@typescript-eslint/no-unused-vars': "warn",
            'react/no-deprecated': "warn"
        }
    }
];