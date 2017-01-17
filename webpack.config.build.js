const path = require('path');
const webpack = require('webpack');

const node_modules = path.resolve('./', 'node_modules');

const local = require('./local.config.js');

module.exports = {
  entry: './' + local.directories.dev + '/js/app.js',
	output: {
		path: path.join(__dirname, local.directories.prod),
    publicPath: local.directories.prod + '/',
		filename: 'js/bundle.js',
    pathinfo: true
	},
  devtool: 'eval',
  cache: true,
  watch: true,
  debug: true,
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        cacheDirectory: true
      }
    }, {
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }],
    postLoaders: [{
      test: /\.js$/,
      exclude: /\/(node_modules|bower_components)\//,
      loader: 'autopolyfiller',
      query: { browsers: ['last 2 versions', 'ie >= 9'] }
    }]
	},
	resolve: {
    unsafeCache: true,
    extensions: ['', '.js', '.jsx'],
    alias: {}
	},
	plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
	]
};
