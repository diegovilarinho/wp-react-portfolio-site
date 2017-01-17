const gulp = require('gulp');
const connect = require('gulp-connect');
var mainBowerFiles  = require('gulp-main-bower-files');
var gulpFilter      = require('gulp-filter');
var gulpsync        = require('gulp-sync')(gulp);
// JS - Modules
var bump            = require('gulp-bump');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

const local = require('../local.config.js');

/**
 * JS
 */
gulp.task('vendor-js', gulpsync.sync( ['copy:bower_components'] ), () => {
  return gulp.src( [local.directories.temp + '/plugins/plugins.js', local.directories.dev + '/js/vendor/*.js'] )
    .pipe( uglify({
      preserveComments: 'license',
      compress: true,
      mangle: false
    }))
    .pipe( concat('plugins.js') )
    .pipe( gulp.dest( local.directories.temp + '/plugins/' ) );
});