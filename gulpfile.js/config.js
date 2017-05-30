module.exports = {
	root: {
		src: './src',
		dest: './build'
	},
	css: {
		src: './src/styles/**/*.scss',
		all: 'foundation.css',
		dest: './build/css',
		main: './build/css/foundation.css'
	},
	scripts: {
		src: './src/scripts/**/*',
		entries: './src/scripts/app.jsx',
		dest: './build/scripts',
		modules: 'node_modules',
		extentions: ['js']
	},
	watch: {
		path: ['./src/styles/**/*.scss', './src/scripts/**/*']
	}
};