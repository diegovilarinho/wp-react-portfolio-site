const gulp = require('gulp');
const watch = require('gulp-watch');
const connect = require('gulp-connect');

const local = require('../local.config.js');

// Default
gulp.task('webpack-reload', () => {
  gulp.src([local.directories.temp + '/js/bundle.js'])
  .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch([local.directories.dev + '/**/*.html'], ['html']);
  gulp.watch([local.directories.dev + '/**/*.php'], ['copy']);
  gulp.watch([local.directories.dev + '/scss/**/*.scss'], ['sass-with-autoprefixer']);
  gulp.watch([local.directories.dev + '/js/**/*.{js, jsx}'], ['webpack-reload']);
});
