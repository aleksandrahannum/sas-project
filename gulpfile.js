var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    'use strict';
    return gulp.src('app/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);  
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('app/fonts'));
})