var Q = require("q"),
    gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    runSequence = require('run-sequence'),
    gutil = require('gulp-util'),
    tsc = require('gulp-typescript'),
    typescript = require('typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json");
    

var cfg = require('./build.config.js');

gulp.task('app:node_modules:build', function(){
    logHighlight("Copy node_modules files");
    gulp.src([
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/systemjs/dist/system-polyfills.js",
        "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
        "node_modules/angular2/bundles/angular2-polyfills.js",
        "node_modules/systemjs/dist/system.js",
        "node_modules/rxjs/bundles/Rx.js",
        "node_modules/angular2/bundles/angular2.js",
        "node_modules/angular2/bundles/http.js",
        "node_modules/angular2/bundles/router.js"
    ]).pipe(concat('node_modules.js')).pipe(gulp.dest('./build'));

});


gulp.task('app:js:build', function () {
    logHighlight("Copy js files");
    var src = cfg.src.ts;
    var tsProject = tsc.createProject('./tsconfig.json', {
        typescript: typescript,
        outFile: 'app.gulp.js'
    });

    var tsResult = gulp.src('./app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});


gulp.task('app:js:main', function () {
    logHighlight("Copy main files");
    var src = cfg.src.ts;
    var tsProject = tsc.createProject('./tsconfig.json');
    var tsResult = gulp.src('./app/main.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});


gulp.task('app:build', function () {
    var deferred = Q.defer();

    runSequence(
        'app:node_modules:build',
        'app:js:build',
        'app:js:main',
        function () {
            deferred.resolve();
        });

    return deferred.promise;
});


gulp.task('watch', ['app:build'], function () {
    //var server = livereload;
    livereload.listen();
    // .js files
    gulp.watch('./app/**/*.js', ['app:build']);

    var buildDir = './build/index.html';
    gulp.watch(buildDir).on('change', function (file) {
        gutil.log(file.path);
        livereload.changed(file.path);
    });
});

function logHighlight(message) {
    gutil.log(gutil.colors.black.bgWhite(message));
};