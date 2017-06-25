module.exports = function(paths) {
	return {
		module: {
			rules: [{
				test: /\.html$/,
				use: [ {
					loader: 'html-loader',
				}],
			}]
		},
		
		module: {
			rules: [
			  { test: /\.jpg$/, use: [ "file-loader" ] },
			  { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] }
			]
		},
		output: {
			publicPath: "http://cdn.example.com/[hash]/"
		}
		
	};
};
