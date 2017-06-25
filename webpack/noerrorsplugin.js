const webpack = require('webpack');

module.exports = function(paths) {
	return {
		plugins: [
	    	new webpack.NoEmitOnErrorsPlugin()
	    ],	
	};
};
