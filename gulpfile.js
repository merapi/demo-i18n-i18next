var gulp = require('gulp');
var i18next = require('i18next-parser');

gulp.task('i18next', function() {
  gulp.src('src/**')
    .pipe(i18next({
      locales: ['en', 'de', 'pl'],
      functions: ['__', '_e', 't'],
      output: '../locales'
    }))
    .pipe(gulp.dest('locales'));
});
