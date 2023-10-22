import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'gulp-bro';
import rename from 'gulp-rename';

const { src, dest, task } = gulp;

const path = {
    dev: {
        libs: 'libs/libs.js'
    },
    build: {
        js: 'docs/js/',
    }
};

const getLibs = () => {
    return src(path.dev.libs)
        .pipe(browserify({
            transform: [
                babelify.configure({
                    presets: ['@babel/preset-env'],
                })
            ],
        }))
        .pipe(rename('libs.min.js'))
        .pipe(dest(path.build.js))
};

task('default', getLibs);
