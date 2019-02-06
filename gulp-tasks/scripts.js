module.exports = function (gulp, plugins) {
	return function () {

		let deps = [
			'common/main/main',
			'common/popup/popup',
			'common/menu/menu',
			'common/sheet/sheet',
		];

		let paths = [];

		deps.forEach(function (item) {
			paths.push(`pages/${item}.js`);
		});

		gulp.src(paths)
			.pipe(plugins.concat('index.min.js'))
			.pipe(gulp.dest('pages/index'));
		};
};