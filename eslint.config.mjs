export default {
	"extends": [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"prettier",
	],
	"env": {
		"browser": true,
		"es2021": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/explicit-module-boundary-types": "off"
	}
};
