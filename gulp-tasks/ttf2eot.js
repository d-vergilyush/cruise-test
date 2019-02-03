module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('public/fonts/**/*.ttf')
            .pipe(plugins.ttf2eot())
            .pipe(gulp.dest('public/fonts'));
    };
};