var historyFallback = require('connect-history-api-fallback');
var log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
    "files": [
      './**/*.html', './**/*.css', './**/*.js'
    ],
    "server": {
      "baseDir": './',
      "middleware": [
        log(),
        historyFallback({"index": '/index.html'})
      ]
    },
    "port": 3000
};
