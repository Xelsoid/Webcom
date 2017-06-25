const webpack = require('webpack');

module.exports = function(paths) {
	return {
		plugins: [
	    	new webpack.optimize.UglifyJsPlugin({
	    		sourceMap: true,
	    		compress: {
	    			warnings: false,
	    			drop_console: true,
	    			unsafe: true,
	    		}
	    	})
	    ],	
	};
};
