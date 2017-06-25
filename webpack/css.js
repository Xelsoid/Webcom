module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test:/\.css$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					// Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
					// loader: "url?limit=10000"
					use: "url-loader"
				},
				{
					test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
					use: 'file-loader'
				},
			]
		},
	};
};
