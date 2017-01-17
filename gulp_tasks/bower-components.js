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

const dest = (folder) => local.directories[folder];

/**
 * JS
 */
gulp.task('bower_components', function() {
  var filterJS = gulpFilter('**/*.js', { restore: true });
  return gulp.src('../bower.json')
    .pipe(mainBowerFiles({
      overrides: {
        modernizr: {
          "main": [
            "./modernizr.js"
          ]
        },
        lightgallery: {
          "main": [
            "./dist/js/lightgallery-all.min.js"
          ]
        }
        // BOWER_PACKAGE: {
        //   main: [
        //     './dist/css/!*.min.*',
        //     './dist/fonts/!*.*'
        //   ]
        // }
      }
    }))
    .pipe(filterJS)
    .pipe(concat('plugins.js'))
    .pipe( uglify())
    .pipe(filterJS.restore)
    .pipe(gulp.dest( '../src/plugins/' ));
});
