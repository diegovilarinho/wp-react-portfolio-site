const gulp = require('gulp');
const connect = require('gulp-connect');

const local = require('../local.config.js');

// Default
gulp.task('copy', () => {
  return gulp.src([
      '!' + local.directories.dev + '/js/**/*.*',
      '!' + local.directories.dev + '/scss/**/*.*',
      local.directories.dev + '/**/*.*'
    ])
    .pipe(gulp.dest(local.directories.temp))
    .pipe(connect.reload());
});

// Build
gulp.task('copy:build', () => {
  return gulp.src([
      '!' + local.directories.dev + '/js/**/*.*',
      '!' + local.directories.dev + '/scss/**/*.*',
      local.directories.dev + '/**/*.*'
    ])
    .pipe(gulp.dest(local.directories.prod));
});
