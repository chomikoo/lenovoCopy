var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('serve', ['sass'], function () {
    browserSync({
        server: 'src'
    });

    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/scss/**/*.sass', ['sass']);
});

gulp.task('sass', function () {
            return gulp.src('src/scss/**/*.sass')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 3 versions']
                                   }))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('src/css'))
                .pipe(browserSync.stream());
                });



            gulp.task('default', ['serve']);
