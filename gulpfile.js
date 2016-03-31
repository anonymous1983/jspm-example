var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    jspm = require('gulp-jspm-build');

//jspm bundle-sfx app build/app.js

gulp.task('build.prod.js', function () {
    jspm({
        bundleOptions: {
            minify: true,
            mangle: true
        },
        bundles: [
            { src: 'app', dst: 'app.js' }
        ]
    })
    .pipe(gulp.dest('build'));
});

gulp.task('serve', [], function () {

    browserSync({
        port: 5600,
        files: ['./app/**/*.html', './app/**/*.ts'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: []
        }
    });
});

gulp.task('default', ['serve']);