module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.js?$': 'babel-jest',
		'^.+\\.jsx?$': 'babel-jest',
	   },
	"roots": [
		"<rootDir>/test"
	  ],
	  "testMatch": [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	  ],
	  "transform": {
		"^.+\\.(js|ts|tsx)$": "ts-jest"
	},
	moduleNameMapper: {
        '(.+)\\.js': '$1'
    },
    extensionsToTreatAsEsm: ['.ts']
};