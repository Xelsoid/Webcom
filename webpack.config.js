const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const modul = require('./webpack/modul');

const common = merge([
	{
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, './public'),
			filename: 'bundle.js',
		},
		resolve: {
	        extensions: ['.js', '.json', '.coffee', 'html']
	    },
		plugins: [
	    	new HtmlWebpackPlugin({
	    		filename: 'index.html',
	    		template: path.join(__dirname, 'src/index.html')
	    	}),
	    	new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery"
			}),
	    ],
	}
]);

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			modul(),
		]);
	}
	if (env === 'development'){
		return merge([
			common,
			modul(),
			devserver(),
		]);
	}
};
