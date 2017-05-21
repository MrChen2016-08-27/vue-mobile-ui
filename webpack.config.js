var webpack = require("webpack");
module.exports = {
	entry: './src/index.js',
	output: {
		filename: './index.js'
	},
	module: {
		loaders: [
			{ test: /.vue$/,loader: 'vue-loader' },
		    {
		      test: /\.js$/,
		      loader: 'babel-loader',
		      exclude: /node_modules/
		    }
		]

	},
	resolve: {
		alias: { 'vue$': 'vue/dist/vue.common.js' }
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				babel: {
					presets: ['es2015','stage-3']
				}
			}
		})
	]


}