const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

function pageReload(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
    done();
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
    gulp.watch('./**/*.html', reload)
}

function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('sass-compile', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
})

gulp.task(pageReload);
gulp.task('default', gulp.parallel(pageReload, watchFiles));
