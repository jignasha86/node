module.exports = function(app, controllers) {
    app.get('/accounts', controllers.account.list);
    app.post('/accounts', controllers.account.create);
};

/*module.exports = function(app) {
  var account = require('../controllers/account');

  app.route('/accounts')
    .get(account.list_accounts)
    .post(account.create_account);


  app.route('/accounts/:accountId')
    .get(account.read_account)
    .put(account.update_account)
    .delete(account.delete_account);
};*/

