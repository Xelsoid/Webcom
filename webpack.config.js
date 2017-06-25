const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const less = require('./webpack/less');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const babel = require('./webpack/babel');
const uglifyJS = require('./webpack/uglifyJS');
const noerrorsplug = require('./webpack/noerrorsplugin');
const html = require('./webpack/html');

// const PATHS = {
// 	app: path.join(__dirname, '/app'),
// 	build: path.join(__dirname, '/public'),
// }

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
	    		// favicon:'src/images/srch.jpg',
	    		template: path.join(__dirname, 'src/index.html')
	    	}),
	    	new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery"
			}),
	    	// new webpack.optimize.CommonsChunkPlugin({
	    	// 	name: 'common',
	    	// 	minChunks: 2
	    	// })
	    ],
	}
]);


module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			babel(),
			// extractCSS(),
			// images(),
			// html(),
			// uglifyJS(),
			// noerrorsplug(),
		]);
	}
	if (env === 'development'){
		return merge([
			common,
			babel(),
			devserver(),
			// less(),
			// css(),
			// html(),
			// images(),
		]);
	}
};
