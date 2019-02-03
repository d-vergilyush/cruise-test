module.exports = function (gulp, plugins, src) {
    return function () {

        var processors = [
            plugins.postcssCssnext(['last 15 versions']),
            plugins.postcssShort,
            plugins.postcssMediaDirectives,
        ];

        gulp.src('pages/**/*.sass')
            .pipe(plugins.sass().on("error", plugins.notify.onError()))
            .pipe(plugins.postcss(processors).on("error", plugins.notify.onError()))
            .pipe(plugins.rename({suffix: '.min', prefix: '', extname: '.css'}))
            // .pipe(plugins.autoprefixer(['last 15 versions']))
            // .pipe(plugins.cleanCss({level: {1: {specialComments: 0}}}))
            .pipe(gulp.dest('pages/'))
            .pipe(plugins.browserSync.reload({stream: true}));
    };
};