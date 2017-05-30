'use strict';

var gulp = require('gulp');
var sequence = require('gulp-sequence');

//Default gulp task
gulp.task('default', ['builddev']);

// Development gulp tasks
gulp.task('builddev', function() {
	sequence('development')
});

// Production gulp tasks
gulp.task('prod', ['production']);
