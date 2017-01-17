const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const local = require('../local.config.js');

const filename = 'bundle.min.js';

// Build
gulp.task('uglify:build', function() {
  gulp.src(local.directories.prod + '/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify({
    output: {
      space_colon: false,
      comments: false
    },
    mangle: true,
    compress: {
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true
    },
  }))
  .pipe(rename(filename))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest(local.directories.prod + '/js'));
});
