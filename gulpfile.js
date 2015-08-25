var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sass_path = './share_sass/root.scss';
var css_path = './css';

gulp.task('css',function(){
	gulp.src(sass_path)
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest(css_path));
});
