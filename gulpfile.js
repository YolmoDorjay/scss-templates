const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define a task to compile SCSS
gulp.task('sass', function () {
  return gulp
    .src('./scss/**/*.scss') // Source of any SCSS files
    .pipe(sass().on('error', sass.logError)) // Compile SCSS
    .pipe(gulp.dest('./css')); // Destination for compiled CSS
});

// Watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

// Default task (runs when you run `gulp`)
gulp.task('default', gulp.series('sass', 'watch'));
