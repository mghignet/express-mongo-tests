module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var src = {
        scss: 'public/**/*.scss',
        js: 'public/**/*.js',
        views: ['public/**/*.html']
    };

    grunt.initConfig({
        concurrent: {
            target: {
                tasks: ['connect', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            } 
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    livereload: true 
                }
            }
        },
        jshint: {
            all: [src.js]
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/assets/sass',
                    src: ['*.scss'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                files: src.scss,
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: src.js,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            views: {
                files: src.views,
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('server', [
        'sass',
        'jshint',
        'concurrent'
    ]);
}
