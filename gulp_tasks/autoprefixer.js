const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const run = require('run-sequence');

const local = require('../local.config.js');

const filename = 'style.css';

// Default
gulp.task('sass-with-autoprefixer', () => {
	run('sass', 'autoprefixer');
});

// Default
gulp.task('autoprefixer', () => {
	return gulp.src(local.directories.temp + '/' + filename)
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(local.directories.temp));
});

// Build
gulp.task('autoprefixer:build', () => {
	return gulp.src(local.directories.prod + '/' + filename)
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(gulp.dest(local.directories.prod));
});
