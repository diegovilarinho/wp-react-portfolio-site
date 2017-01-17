const gulp = require('gulp');
const connect = require('gulp-connect');
const cssmin = require('gulp-cssmin');
const rewriteCSS = require('gulp-rewrite-css');
const concat = require('gulp-concat');

const local = require('../local.config.js');

// Vendor CSS Files
gulp.task('vendor-css', function () {
  return gulp.src( [
      local.directories.temp + '/plugins/justifiedGallery/dist/css/justifiedGallery.css',
      local.directories.temp + '/plugins/lightgallery/dist/css/lightgallery.css'
    ] )
    .pipe( rewriteCSS( { destination: local.directories.temp } ) )
    .pipe( concat('vendor.css') )
    .pipe( cssmin() )
    .pipe( gulp.dest( local.directories.temp ) )
    .pipe(connect.reload());
});


