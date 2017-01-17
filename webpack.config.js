// Webpack configuration provided by LearnCode.academy (https://www.youtube.com/user/learncodeacademy)
// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   context: path.join(__dirname, "src"),
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./app.js",
  
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0']
//         }
//       }
//     ]
//   },
  
//   output: {
//     path: __dirname + "/build/js/",
//     publicPath: "/js/",
//     filename: "app.min.js"
//   },
  
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };
var debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');

const node_modules = path.resolve('./', 'node_modules');

const local = require('./local.config.js');

module.exports = {
  output: {
    path: path.join(__dirname, local.directories.temp),
    publicPath: local.directories.temp + '/',
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
      query: { browsers: ['last 3 versions', 'ie >= 9'] }
    }]
  },
  resolve: {
    unsafeCache: true,
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};

