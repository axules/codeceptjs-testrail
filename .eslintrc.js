module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		mocha: true
	},
	globals: {
		Feature: true,
		Before: true,
		Scenario: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	},
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		'no-control-regex': 0
	}
};