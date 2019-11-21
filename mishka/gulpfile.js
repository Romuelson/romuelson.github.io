const gulp = require('gulp');
const plumber = require("gulp-plumber");
const sass = require('gulp-sass');
// const postcss = require("gulp-postcss");
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const gulpStylelint = require('gulp-stylelint');
const browserSync = require('browser-sync').create();

function style () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 4 versions']
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
}

function images () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
    ]))
    .pipe(gulp.dest('build/img'))
}

function watch () {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  })
  gulp.watch('source/sass/**/*.scss', style)
  gulp.watch('build/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.images = images;
exports.watch = watch;