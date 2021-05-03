const {ErrorMiddleware, FormatValidator} = require("./util/middlewares");
const newsRoutes = require('./routes/newsRoutes.js');
const botWebhookRoute = require('./routes/botWebhookRoute.js');


module.exports = app => {
    FormatValidator(app);
    botWebhookRoute(app);
    newsRoutes(app);
    ErrorMiddleware(app);
}
