module.exports = function (gulp, plugins, src) {
    return function () {

        gulp.src('pages/**/*.sass')
            .pipe(plugins.sass().on("error", plugins.notify.onError()))
            .pipe(plugins.rename({suffix: '.min', prefix: '', extname: '.css'}))
            .pipe(plugins.autoprefixer(['last 15 versions']))
            .pipe(plugins.cleanCss( {level: { 1: { specialComments: 0 } } }))
            .pipe(gulp.dest('pages/'))
            .pipe(plugins.browserSync.reload({stream: true}));
    };
};
