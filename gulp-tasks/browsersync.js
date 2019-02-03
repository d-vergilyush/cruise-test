module.exports = function (gulp, plugins, src) {
	return function () {
		plugins.browserSync({ 
			proxy: "cruise.loc",
			notify: false,
            open: false
		});
		// plugins.browserSync.init({
		// 	server: {
		// 		baseDir: "pages/"
		// 	}
		// });
	};
};