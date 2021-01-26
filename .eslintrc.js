module.exports = {
	extends: [
		'airbnb/hooks',"standard",
		"standard-react",
		'plugin:jest/recommended',
		'prettier',"prettier/standard",
		"prettier/react",
		'plugin:prettier/recommended'
	],
	"parser": "babel-eslint",
	"env": {
		"node": true
	},
	"parserOptions": {
		"ecmaVersion": 2020,
		"ecmaFeatures": {
			"legacyDecorators": true,
			"jsx": true
		}
	},
	"settings": {
		"react": {
			"version": "16"
		}
	},
	rules: {
		semi: [2, 'never'],
		// 'no-console': 'error',
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		'react/jsx-filename-extension': 0,
		'import/no-named-as-default': 0,
		'no-return-await': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'none',
				semi: false,
				bracketSpacing: true,
				jsxBracketSameLine: true,
				printWidth: 80,
				tabWidth: 2,
				useTabs: false,
				endOfLine: 'auto'
			}
		]
	}
};
