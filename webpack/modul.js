const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require("webpack");
module.exports = function(paths) {
	return {
		module: {
			loaders: [
				{ 
					test: /\.js$/, 
					exclude: /node_modules/, 
					loaders: ["babel-loader"], 
				},
				{
					test: /\.(jpg|png|svg|gif)$/,
					loader: 'file-loader',
					exclude: /fonts/,
					options: {
						name: 'images/[name].[ext]'
					}
				},
				{
		            test: /\.less$/,
		            loader:'css-hot-loader',
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
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: 'css-loader',
					}),
				},
				{
					test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'file-loader',
					exclude: /images/,
					options: {
						name: 'fonts/[name].[ext]'
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
					loader: 'file-loader',
					exclude: /images/,
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
			],
		},
		plugins: [
			new ExtractTextPlugin('./css/[name].css'),
		],
	};
};
