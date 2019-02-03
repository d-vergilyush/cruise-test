module.exports = function (gulp, plugins) {
	return function () {

		let deps = [
			'common/header/header',
			'common/main/main',
			'common/common/common',
            'common/popup/popup',
            'common/menu/menu',
            'common/up/up',
            'common/down/down',
        ];

		deps.forEach(function (item) {
			paths.push(`pages/${item}.js`);
        });

		gulp.src(paths)
            .pipe(plugins.concat('index.min.js'))
            // .pipe(plugins.uglify())
            .pipe(gulp.dest('pages/index'));
	};
};