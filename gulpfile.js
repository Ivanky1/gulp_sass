'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
require('es6-promise').polyfill();

gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.scss', ['sass']);
});



gulp.task('default', ['watch', 'sass']);
