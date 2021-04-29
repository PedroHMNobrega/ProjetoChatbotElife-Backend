const {ErrorMiddleware, FormatValidator} = require("./util/middlewares");
const newsRoutes = require('./routes/newsRoutes.js');

module.exports = app => {
    FormatValidator(app);
    newsRoutes(app);
    ErrorMiddleware(app);
}
