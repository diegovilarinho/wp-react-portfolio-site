const gulp = require('gulp');
const opn = require('opn');
const connect = require('gulp-connect');
const historyApiFallback = require('connect-history-api-fallback');

const local = require('../local.config.js');
const pkg = require('../package.json');

// Default
gulp.task('server', () => {
  connect.server({
    root: [
      './' + local.directories.temp,
      './' + local.directories.dev
    ],
    livereload: true,
    middleware: (connect, opt) => [ historyApiFallback({}) ]
  });
  opn(local.host + pkg.name);
});
