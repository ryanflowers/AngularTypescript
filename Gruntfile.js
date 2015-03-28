module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['app/**/*.ts'],
                dest: 'app/js',
                options: {
                    module: 'commonjs', //or amd
                    target: 'es5', //or es3
                    basePath: 'app',
                    sourceMap: true,
                    declaration: false
                }
            }
        },
        clean: {
            js: "app/js/"
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app/js/**/*.js'],
                dest: 'app/js/app.js'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'typescript', 'concat']);

};