const gulp = require('gulp');
const connect = require('gulp-connect');

const local = require('../local.config.js');

const dest = (folder) => local.directories[folder];

// Default
gulp.task('html', function () {
  return gulp.src('./' + local.directories.dev + '/*.html')
  .pipe(gulp.dest(dest('temp')))
  .pipe(connect.reload());
});
