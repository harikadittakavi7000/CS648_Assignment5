var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');


function css() {
        return src('src/*.scss')
                .pipe(sass())
                .pipe(dest('dist/css'))
};

exports.default = css;