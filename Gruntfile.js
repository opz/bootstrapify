/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          document: true,
          window: true,
          console: true,
          Image: true,
          $: true,
          jQuery: true,
          Shopify: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      assets: {
        src: ['theme/assets/_base.js', 'theme/assets/bootstrapify-option-selection.js']
      }
    },
    less: {
        development: {
            options: {
                optimization: 2
            },
            files: {
              'theme/assets/styles.css': 'dist/less/styles.less',
              'theme/assets/checkout.css.liquid': 'dist/less/checkout.less'
            }
        }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      styles: {
         files: [
             'bower_components/bootstrap/less/*.less',
             'bower_components/lesshat/build/*.less',
             'dist/less/*.less'
         ],
         tasks: ['less'],
         options: {
             nospawn: true
         }
      }
    },
    copy: {
      main: {
        files: [
          // grab bootstraps js files
          {
            expand: true,
            cwd: 'bower_components/bootstrap/js/',
            src: '*.js',
            dest: 'theme/assets/'
          },
          {
            expand: true,
            cwd: 'bower_components/animate.css/',
            src: '*.min.css',
            dest: 'theme/assets/'
          },
          {
            expand: true,
            cwd: 'bower_components/typeahead.js/dist/',
            src: 'typeahead.js',
            dest: 'theme/assets/'
          }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['jshint', 'copy', 'less']);

};
