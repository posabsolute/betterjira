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
        src: ['app/templates/**/*.html','app/components/**/*.html','app/layouts/**/*.html'],
        dest: 'app/templates/templates.js'
      }
    },
    watch: {
      scripts: {
        files: 'app/**/*.scss, app/**/*.html,',
        tasks: ['build'],
        options: {
          interrupt: true,
        },
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('postcss-import')(),
          require('lost'),
          require('cssnext')() // add fallbacks for rem units
        ],
      },

      dist: {
        src: 'app/css/main.css',
        dest: 'dist/css/dev/main.css'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-nunjucks');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');


  grunt.registerTask("build", ["nunjucks", "postcss"]);

};
