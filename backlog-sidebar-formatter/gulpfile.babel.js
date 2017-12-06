import gulp from 'gulp';
import gulpIf from 'gulp-if';
import eslint from 'gulp-eslint';
import bookmarklet from 'gulp-bookmarklet';
import babel from 'gulp-babel';

function isFixed(file) {
  return file.eslint != null && file.eslint.fixed;
}

gulp.task('bookmarklet', ['lint'], () => {
  return gulp.src('./src/*.js')
    .pipe(babel())
    .pipe(bookmarklet())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', () => {
  return gulp.src('./src/*.js')
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./src')))
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  return gulp.watch('./src/*.js', ['bookmarklet']);
});