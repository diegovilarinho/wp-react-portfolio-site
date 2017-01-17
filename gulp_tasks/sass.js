const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob-import');
const rename = require('gulp-rename');

const local = require('../local.config.js');

const filename = 'style.css';
const dest = (folder) => local.directories[folder];

// Default
gulp.task('sass', () => {
  return gulp.src('./' + local.directories.dev + '/scss/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(rename(filename))
  .pipe(gulp.dest(dest('temp')))
  .pipe(connect.reload());
});

// Build
gulp.task('sass:build', () => {
  return gulp.src('./' + local.directories.dev + '/scss/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(rename(filename))
  .pipe(gulp.dest(dest('prod')));
});
