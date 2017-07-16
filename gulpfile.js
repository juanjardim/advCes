let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var config = {
    stylesPath: 'src/styles',
    scriptsPath: 'src/scripts',
    nodeModules: 'node_modules'
}

gulp.task('sass', () => {
    console.log('Compiling Sass');
    gulp.src(config.stylesPath + '/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest((f) => {
            return f.base;
        }));
});

gulp.task('Bootstrap', () => {
    console.log('Bootstrap')
    gulp.src(config.nodeModules + '/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest(config.stylesPath + '/bootstrap/css'));

    gulp.src(config.nodeModules + '/bootstrap/dist/fonts/**.*')
    .pipe(gulp.dest(config.stylesPath + '/bootstrap/fonts'));

    gulp.src(config.nodeModules + '/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest(config.scriptsPath + '/bootstrap'));
});

gulp.task('fontawesome', () => {
    console.log('fontawesome')
    gulp.src(config.nodeModules + '/font-awesome/css/*.css')
    .pipe(gulp.dest(config.stylesPath + '/font-awesome/css'));
    gulp.src(config.nodeModules + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest(config.stylesPath + '/font-awesome/fonts'));
})


gulp.task('minify-css', () => {
    console.log('Minification')
    gulp.src(config.stylesPath +'/app.css')
        .pipe(cleanCSS({ compatibility: 'ie9' }))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(config.stylesPath));
});

gulp.task('default', ['sass', 'minify-css', 'Bootstrap', 'fontawesome'], () => {
    gulp.watch(config.stylesPath + '/**/*.scss', ['sass', 'minify-css']);
})