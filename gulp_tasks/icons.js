const gulp = require('gulp');
const connect = require('gulp-connect');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const local = require('../local.config.js');

const fontName = 'icons';

// Default
gulp.task('iconfont', () => {
  gulp.src(['./' + local.directories.dev + '/media/icons/*.svg'])
  .pipe(iconfontCss({
    fontName: fontName,
    targetPath: '../../scss/generic/_icons.scss',
    fontPath: './fonts/icons/'
  }))
  .pipe(iconfont({
    fontName: fontName,
    centerHorizontally: true,
    normalize: true,
    fontHeight: 200
   }))
  .pipe(gulp.dest('./' + local.directories.dev + '/fonts/icons'))
  .pipe(connect.reload());
});

// Build
gulp.task('iconfont:build', () => {
  gulp.src(['./' + local.directories.dev + '/media/icons/*.svg'])
  .pipe(iconfontCss({
    fontName: fontName,
    targetPath: '../../scss/generic/_icons.scss',
    fontPath: './fonts/icons/'
  }))
  .pipe(iconfont({
    fontName: fontName,
    centerHorizontally: true,
    normalize: true,
    fontHeight: 200
  }))
  .pipe(gulp.dest('./' + local.directories.dev + '/fonts/icons'));
});
