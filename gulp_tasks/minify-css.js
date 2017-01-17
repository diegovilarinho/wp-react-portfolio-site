const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const local = require('../local.config.js');

const filename = 'style.css';

// Build
gulp.task('minify-css:build', () => {
  return gulp.src(local.directories.prod + '/' + filename)
  .pipe(sourcemaps.init())
  .pipe(cleanCss())
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest(local.directories.prod));
});
