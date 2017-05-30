'use strict';

var gulp = require('gulp');
var clean = require('gulp-rimraf');
var config = require('../config');

gulp.task('clean', function() {
	gulp.src(config.root.dest, {
		read: false
	})
	.pipe(clean());
});