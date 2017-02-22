var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var filesize = require('gulp-filesize');
var ify = require('gulp-if');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('/build', {read: false})
    .pipe(clean());
});

var input = './public_html/CSS/SCSS/**/*.scss';
var output = './public_html/CSS';

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(autoprefixer({browsers: ['last 4 version']}))
    .pipe(concat('main.css'))
    .pipe(sass())
    .pipe(gulp.dest(output));
});

 
gulp.task('default', function () {
    // place code for your default task here
});
