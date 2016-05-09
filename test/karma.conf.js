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
      'app/public/bower_components/angular-mocks/angular-mocks.js',
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

    browsers: ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],

    singleRun: false,

    concurrency: Infinity
  })
}
