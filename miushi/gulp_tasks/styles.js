'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import mincss from 'gulp-clean-css';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv,
    production = !!argv.production;

gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulpif(production, autoprefixer({
      cascade: false
    })))
    .pipe(gulpif(production, mincss({
      ompatibility: 'ie8', level: {
        1: {
            specialComments: 0,
            removeEmpty: true,
            removeWhitespace: true
        },
        2: {
            mergeMedia: true,
            removeEmpty: true,
            removeDuplicateFontRules: true,
            removeDuplicateMediaBlocks: true,
            removeDuplicateRules: true,
            removeUnusedAtRules: false
        }
      }
    })))
    .pipe(gulpif(production, rename({
      suffix: '.min'
    })))
    .pipe(plumber.stop())
    .pipe(gulpif(!production, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
});