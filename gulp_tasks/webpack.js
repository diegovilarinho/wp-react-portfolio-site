const gulp = require('gulp');
const opn = require('opn');
const gutil = require('gulp-util');
const connect = require('gulp-connect');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('../webpack.config.js');
const webpackBuildConfig = require('../webpack.config.build.js');

const local = require('../local.config.js');

// Default
gulp.task('webpack', function(callback) {
	return gulp.src(['./' + local.directories.dev + '/js/app.js', './' + local.directories.dev + '/js/vendor/main.js'])
	.pipe(webpackStream(webpackConfig, webpack))
	.pipe(gulp.dest(local.directories.temp))
	.pipe(connect.reload());
});

// Build
gulp.task('webpack:build', function(callback) {
	const devCompiler = webpack(Object.create(webpackBuildConfig));
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError('webpack:build', err);
		gutil.log('[webpack:build]', stats.toString({ colors: true }));
		callback();
	});
});
