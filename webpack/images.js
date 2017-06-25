module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|svg)$/,
					loader: 'file-loader',
					exclude: /fonts/,
					options: {
						name: 'images/[name].[ext]'
					}
				}
			]
		},
	};
};
