module.exports = function() {
	return{
		devServer: {
	    	stats: 'errors-only',
	    	port: 8000
	    },
	    devtool: "source-map",
	}
};
