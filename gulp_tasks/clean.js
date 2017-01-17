const gulp = require('gulp');
const del = require('del');

const local = require('../local.config.js');

// Default
gulp.task('clean', () => {
  return del([local.directories.temp], { force: true });
});

// Build
gulp.task('clean:build', () => {
  return del([local.directories.prod], { force: true });
});
