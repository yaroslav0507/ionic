'use strict';

gulp.task('fonts', function(){
    return gulp.src([
        './client/vendors/ionic/fonts/*.*',
        './client/fonts/**/*.*'
    ])
        .pipe(gulp.dest('www/fonts'));
});
