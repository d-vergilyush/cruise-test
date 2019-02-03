module.exports = function (gulp, plugins) {
	return function () {
		gulp.src('public/img/**')
		.pipe(imagemin([
			plugins.imagemin.gifsicle({interlaced: true}),
			plugins.imagemin.jpegtran({progressive: true}),
			plugins.imagemin.optipng({optimizationLevel: 7}),
			plugins.imagemin.svgo({
				plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
				]
			})
			]))
		.pipe(gulp.dest('pages/index/img'))
	};
};