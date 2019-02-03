var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: '*'});

gulp.task('default', ['sass', 'scripts', 'browsersync'], function() {
    gulp.watch(['pages/**/*.sass'],    ['sass']);
    gulp.watch(['pages/**/*.js'], ['scripts'], plugins.browserSync.reload);
    
    gulp.watch('pages/**/*.php',  plugins.browserSync.reload);
});

gulp.task('scripts', getTask('scripts'));
gulp.task('sass', getTask('sass'));

gulp.task('css2sass', getTask('css2sass'));

gulp.task('fonts', ['move-fonts', 'convert-fonts']);

gulp.task('move-fonts', function () {
	gulp.src('public/fonts/**/*.ttf')
		.pipe(gulp.dest(function (file) {
			return 'public/fonts/' + file.relative.substr(0, file.relative.lastIndexOf('.')) + '/'
		}));
});

gulp.task('convert-fonts', ['ttf2woff', 'ttf2woff2', 'ttf2eot']);
gulp.task('ttf2woff', getTask('ttf2woff'));
gulp.task('ttf2woff2', getTask('ttf2woff2'));
gulp.task('ttf2eot', getTask('ttf2eot'));

gulp.task('imagemin', getTask('imagemin'));
gulp.task('build', ['sass','scripts'], getTask('build'));

gulp.task('browsersync', getTask('browsersync'));


function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}