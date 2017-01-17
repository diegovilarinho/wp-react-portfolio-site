const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const local = require('../local.config.js');

// Build
gulp.task('imagemin:build', () => {
  return gulp.src(local.directories.prod + '/media/**/*')
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 6,
    multipass: true,
    svgoPlugins: [{
      removeViewBox: false
    }],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(local.directories.prod + '/media'));
});
