const newsController = require('../controller/newsController.js');

module.exports = app => {
    app.route('/news')
        .get(newsController.listNews)
        .post(newsController.addNews);

    app.route('/news/:id')
        .put(newsController.updateNews)
        .delete(newsController.deleteNews);
};
