module.exports = function (orm, db) {
    db.define('table_account', {
        id:      { type: 'text' },
        role_id:    { type: 'text' },
        username: {type: 'text'},
        password: {type: 'text'},
        timezone: {type: 'text'}
    });
};
