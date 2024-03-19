//babel.config.cjs
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			'@babel/plugin-transform-modules-commonjs',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
};