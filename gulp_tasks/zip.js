const gulp = require('gulp');
const zip = require('gulp-zip');

const local = require('../local.config.js');

// Build
gulp.task('zip:build', () => {
  setTimeout(() => {
    return gulp.src(local.directories.prod + '/**/*')
    .pipe(zip(local.directories.prod + '.zip'))
    .pipe(gulp.dest('./'));
  }, 1000);
});
