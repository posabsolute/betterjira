module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8556,
          keepalive : true,
          livereload: false,
          base : "",
          hostname: '*'
        }
      }
    },

    nunjucks: {
      precompile: {
        baseDir: 'app/templates',
        src: ['app/templates/*.html','app/components/**/*.html','app/layouts/**/*.html'],
        dest: 'app/templates/templates.js'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'dist/css/dev/main.css': 'app/css/main.scss'
        }
      },
      dist: {
        options:{
          outputStyle : "compressed",
          sourceMap : "false"
        },
        files: {
          'dist/css/main.css': 'app/css/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-nunjucks');

};
