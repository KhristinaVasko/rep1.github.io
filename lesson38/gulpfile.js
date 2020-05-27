const gulp = require('gulp');
const sass = require('gulp-sass');
var htmlhint = require("gulp-htmlhint");

//sass gulp
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/css'));
  });
// watch sass
  gulp.task('watch', () => {
      gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
  });
  
 //html hint
  gulp.src("app/*.html")
      .pipe(htmlhint())