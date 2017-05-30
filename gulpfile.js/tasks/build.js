'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-uglify');
var concat = require('gulp-concat');
var sequence = require('gulp-sequence');

var config = require('../config');

gulp.task('styles', function() {
	gulp.src(config.css.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(config.css.all))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('css-minify', function () {
    gulp.src(config.css.main)
        .pipe(cssmin())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('js-minify', function (cb) {
	gulp.src(config.css.dest)
		.pipe(uglify())
		.pipe(gulp.dest(config.css.dest))
});

// Development gulp tasks
gulp.task('development', sequence('clean', 'styles', 'webpack'));

gulp.task('production', ['clean', 'styles', 'webpack', 'css-minify', 'js-minify']);