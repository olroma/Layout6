'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const gutil = require('gulp-util');
gulp.task('default', ['watch']);

gulp.task('PostCSS', () => {
  let plugins = [
    require('postcss-define-property')({
      syntax: {
        atrule: true,
        parameter: '',
        property: '',
        separator: '',
        variable: '+'
      }
    }),
    require('postcss-easy-import'),
    require('postcss-cssnext')({warnForDeprecations: false}),
    require('precss'),
    require('postcss-nesting')(),
    require('postcss-assets'),
    //require('cssnano')
  ];

  return gulp.src('./PControl/*.css')
            .pipe(postcss(plugins))
            .on('error', gutil.log)
            .pipe(postcss(plugins))
            .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
  gulp.watch('./PControl/*.css', ['PostCSS']);
  gulp.watch('./PControl/common/*.css', ['PostCSS']);
  gulp.watch('./PControl/block/*.css', ['PostCSS']);
});

gulp.task('init', () => {
  const fs = require('fs');

  fs.mkdir('./img');
  fs.mkdir('./css');
  fs.mkdir('./js');

  fs.open('./index.html', 'w', (err, file) => {if (err) throw err; });
  fs.writeFile('./css/style.css', '@import "css/PControl.css";\r\n\r\nhtml, body {\r\nmin-width: 320px;\r\n}', (err) => { if (err) throw err; });
  fs.writeFile('.gitignore', 'node_modules', (err) => { if (err) throw err; });
});