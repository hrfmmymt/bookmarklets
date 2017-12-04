import gulp from "gulp";
import eslint from "gulp-eslint";
import bookmarklet from "gulp-bookmarklet";
import babel from "gulp-babel";

gulp.task("bookmarklet", ["lint"], () => {
  return gulp.src("./src/*.js")
    .pipe(babel())
    .pipe(bookmarklet())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("lint", () => {
  return gulp.src("./src/*.js")
    .pipe(eslint({useEslintrc : true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("watch", () => {
  return gulp.watch("./src/*.js", ["bookmarklet"]);
});