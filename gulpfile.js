import gulp from 'gulp'

import posthtml from 'gulp-posthtml'
import include from 'posthtml-include'

const includeConfig = {
    root: './src/includes/'
}

const html = () => {
    return gulp.src('./src/index.html')
        .pipe(posthtml([include(includeConfig)]))
        .pipe(gulp.dest('dest'))
}

export default html

export const watch = () => {
    gulp.watch('./src/**/*.html', html)
}
