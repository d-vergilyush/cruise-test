module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('pages/index/fonts/**/*.ttf')
            .pipe(plugins.ttf2woff())
            .pipe(gulp.dest('pages/index/fonts'));
    };
};