import gulp from 'gulp';
import minifyInline from 'gulp-minify-inline';
import { deleteSync } from 'del';
import minifyHTML from 'gulp-htmlmin';

gulp.task('clean', () => deleteSync('dist/**', { force: true }));

gulp.task('html', () =>
  gulp
    .src('index.html')
    .pipe(minifyInline())
    .pipe(
      minifyHTML({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest('dist'))
);

gulp.task('default', gulp.series('html'));
