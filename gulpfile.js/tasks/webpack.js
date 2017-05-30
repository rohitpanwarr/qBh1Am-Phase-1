'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('../lib/webpack.config.js');

gulp.task('webpack', function(callback) {
	webpack(webpackConfig(), function(err, stats) {
    callback();
	});
});