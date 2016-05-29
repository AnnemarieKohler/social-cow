// Karma configuration
// Generated on Wed May 04 2016 11:25:44 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'app/public/bower_components/jquery/dist/jquery.js',
      'app/public/bower_components/angular/angular.js',
      'app/public/bower_components/moment/min/moment.min.js',
      'app/public/bower_components/angular-cookies/angular-cookies.js',
      'app/public/bower_components/angular-mocks/angular-mocks.js',
      'app/public/bower_components/angular-animate/angular-animate.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'app/public/bower_components/angular-ui-calendar/src/calendar.js',
      'app/public/bower_components/fullcalendar/dist/fullcalendar.min.js',
      'app/public/bower_components/fullcalendar/dist/gcal.js',
      'app/public/javascripts/**/*.js',
      'test/client/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['spec'],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS', 'PhantomJS_custom'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],

    singleRun: true,

    concurrency: Infinity
  })
}
