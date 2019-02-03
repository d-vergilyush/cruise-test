module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('public/fonts/**/*.ttf')
            .pipe(plugins.ttf2woff2())
            .pipe(gulp.dest('public/fonts'));
    };
};