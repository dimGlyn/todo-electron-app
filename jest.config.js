process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
	moduleFileExtensions: [
		'js',
		'jsx',
		'json',
		'vue'
	],
	transform: {
		'^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
		"^.+\\.js$": "<rootDir>/node_modules/babel-jest"
	},
	transformIgnorePatterns: [
		'/node_modules/'
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	testMatch: [
		'**/test/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
	],
	testURL: 'http://localhost/',
}
