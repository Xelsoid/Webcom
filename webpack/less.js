module.exports = function(paths) {
	return {
		module: {
			rules: [{
	            test: /\.less$/,
	            use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
	        }]
		}
	};
};
