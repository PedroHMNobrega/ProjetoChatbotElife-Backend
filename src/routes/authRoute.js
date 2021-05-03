const authController = require('../controller/authController.js');

module.exports = app => {
    app.route('/pin')
        .post(authController.auth);
};
