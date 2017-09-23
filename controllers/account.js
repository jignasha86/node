const util = require('util');
module.exports = {
    list: function(req, res, next) {
        console.log(util.inspect(req, {showHidden: false, depth: null}))
        req.models.table_account.all(function(err, data) {
            res.send(data);
        });
    },

    create: function(req, res, next) { 
        console.log(req.body)
        req.models.table_account.create({
            role_id: req.body.role_id,
            username: req.body.username,
            password: req.body.password,
            timezone: req.body.timezone
        }, function(err, result) {
            console.log(err)
            res.send(result);
        });
    }
};

/*exports.list_accounts = function(req, res, next, db) {
    console.log('List accounts called')
    db.account.all(function(err, data) {
            if(err) return next(err);
            res.send(data[0]);
   });
};

exports.create_account = function(req, res) {
    console.log('todo list RESTful API server')
};

exports.read_account = function(req, res) {
    console.log('todo list RESTful API server')
};

exports.update_account = function(req, res) {
    console.log('todo list RESTful API server')
};

exports.delete_account = function(req, res) {
    console.log('todo list RESTful API server')
};*/
