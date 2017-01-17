const gulp = require('gulp');
const run = require('run-sequence');

require('require-dir')('./gulp_tasks');

// Default
gulp.task('default', () => {
  run(
    'clean',
    'copy',
    'server',
    'watch',
    'google-fonts',
    'sass-with-autoprefixer',
    'svg-sprite',
    'webpack'
  );
});

// Build
gulp.task('build', () => {
  run(
    'clean:build',
    'copy:build',
    'sass:build',
    'autoprefixer:build',
    'minify-css:build',
    'webpack:build',
    'uglify:build'
  );
});
