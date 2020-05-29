'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
paths = {
  views: {
    src: './source/views/pages/*.pug',
    dest: './build/',
    watch: './source/views/**/*.pug'
  },
  styles: {
    src: './source/assets/styles/style.{scss,sass}',
    dest: './build/styles/',
    watch: './source/assets/styles/**/*.{scss,sass}'
  },
  scripts: {
    src: './source/assets/scripts/main.js',
    dest: './build/scripts/',
    watch: './source/assets/scripts/**/*.js'
  },
  images: {
    src: [
      './source/assets/images/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!./source/assets/images/favicon/*.{jpg,jpeg,png,gif,tiff}'
    ],
    dest: './build/images/',
    watch: './source/assets/images/**/*.{jpg,jpeg,png,gif,svg}'
  },
  webp: {
    src: [
        './source/assets/images/**/*.{jpg,jpeg,png,tiff}',
        '!./source/assets/images/favicon/*.{jpg,jpeg,png,gif}'
    ],
    dest: './build/images/',
    watch: [
        './source/assets/images/**/*.{jpg,jpeg,png,tiff}',
        '!./source/assets/images/favicon.{jpg,jpeg,png,gif}'
    ]
  },
  sprites: {
    src: './source/assets/images/svg/*.svg',
    dest: './build/images/sprites/',
    watch: './source/assets/images/svg/*.svg'
  },
  fonts: {
    src: './source/assets/fonts/**/*.{eot,ttf,woff,woff2}',
    dest: './build/fonts/',
    watch: './source/assets/fonts/**/*.{eot,ttf,woff,woff2}'
  },
  favicons: {
    src: './source/assets/images/favicon/*.{jpg,jpeg,png,gif,tiff}',
    dest: './build/images/favicons/',
  },
  gzip: {
    src: './source/.htaccess',
    dest: './build/'
  }
};

requireDir('./gulp_tasks/');
  
export { paths };

export const development = gulp.series('clean',
  gulp.parallel(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'favicons']),
  gulp.parallel('serve'));

export const prod = gulp.series('clean',
  gulp.series(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'favicons', 'gzip']));

export default development;