const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test:/\.scss$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader'],
					}),
				},
				{
		            test: /\.less$/,
		            use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: ['css-loader', 'less-loader'],
					}),
		        },
			    {
					test:/\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: 'css-loader',
					}),
				},
				{
					test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				},
				{
					test: /\.html$/,
					loader: 'html-loader',
					options: {
						name: '[name].[ext]'
					}
				},
			]
		},
		plugins: [
			new ExtractTextPlugin('./css/[name].css'),
		]
	};
};
