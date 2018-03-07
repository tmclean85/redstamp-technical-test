var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + scss/html watchers
gulp.task('serve', function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass & sync with browser
gulp.task('sass', function() {
  return gulp.src("scss/styles.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve']);