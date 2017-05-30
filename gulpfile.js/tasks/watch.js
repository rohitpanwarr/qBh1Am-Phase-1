'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function() {
	gulp.watch(config.watch.path, ['development'])
});