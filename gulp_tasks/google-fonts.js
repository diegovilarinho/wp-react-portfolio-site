const gulp = require('gulp');
const connect = require('gulp-connect');
var googleWebFonts = require('gulp-google-webfonts');

const local = require('../local.config.js');

/**
 * Google Fonts
 */

gulp.task('google-fonts', function () {
	var options = {
		fontsDir: '../../font/', // Relative to where the final generated CSS is - meaning Style.css in the root
		cssDir: '../../scss/',
		cssFilename: '_google-fonts.scss'
	};

	return gulp.src(['./' + local.directories.dev + 'fonts.list'])
		.pipe(googleWebFonts(options))
		.pipe(gulp.dest('./' + local.directories.dev + '/fonts'))
  		.pipe(connect.reload());
});