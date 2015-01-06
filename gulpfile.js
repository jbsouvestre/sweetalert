// jshint node: true
// jshint strict: false
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var path = require('path');

var LIB = 'lib';

gulp.task('scripts', function() {
    var src = path.join(LIB, 'sweet-alert.js');
    return gulp.src(src)
        .pipe(uglify())
        .pipe(rename('sweet-alert.min.js'))
        .pipe(gulp.dest(LIB));
});

gulp.task('styles', function() {
    var src = path.join(LIB, 'sweet-alert.scss');

    return gulp.src(src)
        .pipe(sass())
        .pipe(gulp.dest(LIB));
});

gulp.task('dev', ['scripts', 'styles']);