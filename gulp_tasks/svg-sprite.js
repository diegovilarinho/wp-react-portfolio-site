const gulp = require('gulp');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprite');
const replace = require('gulp-replace');
const run = require('run-sequence');

const local = require('../local.config.js');


// Default
gulp.task('svg-sprite', function () {
	run('generate-svg-sprite', 'rename-scss-output-file');
});

// generate-svg-sprite
gulp.task('generate-svg-sprite', () => {
  return gulp.src('./' + local.directories.dev + '/media/icons/**/*.svg')
  .pipe(svgSprite({
    shape: {
      dimension: {
        maxWidth: 32,
        maxHeight: 32,
        precision: 2,
        attributes: false,
      },
      spacing: {
        padding: 0,
        box: 'content'
      },

      transform: [{
        svgo: {
          plugins : [{
            removeAttrs: {
              attrs: ['fill', 'fill-rule', 'stroke']
            }
          }]
        }
      }]
    },
    mode: {
      view: {
        bust: false,
        // prefix: '.icon-%s',
        // dimensions: true,
        sprite: 'sprites/sprite.view.svg',
        dest: '',
        example: {
          dest: 'sprites/sprite.svg.view.html'
        },
        // render: {
        //   scss: {
        //     // dest: '../scss/components/icons/_sprite.svg.scss'
        //   }
        // }
      },
      symbol: {
        bust: false,
        // prefix: '.icon-%s',
        // dimensions: true,
        sprite: 'sprites/sprite.symbol.svg',
        dest: '',
        example: {
          dest: 'sprites/sprite.svg.symbol.html'
        },
        // render: {
        //   scss: {
        //     // dest: '../scss/components/icons/_sprite.svg.scss'
        //   }
        // }
      },
      defs: {
        bust: false,
        // prefix: '.icon-%s',
        // dimensions: true,
        sprite: 'sprites/sprite.defs.svg',
        dest: '',
        example: {
          dest: 'sprites/sprite.svg.defs.html'
        },
        // render: {
        //   scss: {
        //     // dest: '../scss/components/icons/_sprite.svg.scss'
        //   }
        // }
      },
      stacked: {
        bust: false,
        // prefix: '.icon-%s',
        // dimensions: true,
        sprite: 'sprites/sprite.stacked.svg',
        dest: '',
        example: {
          dest: 'sprites/sprite.svg.stacked.html'
        },
        // render: {
        //   scss: {
        //     // dest: '../scss/components/icons/_sprite.svg.scss'
        //   }
        // }
      }
    },
    svg: {
      xmlDeclaration: true,
      doctypeDeclaration: true,
      namespaceIDs: true,
      dimensionAttributes: true
    },
    variables: {}
  }))
  .pipe(gulp.dest('./' + local.directories.dev + '/media/'));
});

gulp.task('rename-scss-output-file', () => {
  gulp.src('./' + local.directories.dev + '/scss/components/icons/_sprite.svg.scss')
  .pipe(replace('sprites/sprite', '/media/sprites/sprite'))
  .pipe(gulp.dest('./' + local.directories.dev + '/scss/components/icons/'));
});
