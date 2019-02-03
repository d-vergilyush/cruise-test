module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('pages/index/fonts/**/*.ttf')
            .pipe(plugins.ttf2eot())
            .pipe(gulp.dest('pages/index/fonts'));
    };
};