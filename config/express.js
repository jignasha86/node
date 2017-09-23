const bodyParser = require('body-parser');
var logger        = require('morgan');
var error_handler = require('errorhandler');

module.exports = function(app, express) {
    app.use(bodyParser());
    app.use(logger('dev'));
    app.use(error_handler());
};
