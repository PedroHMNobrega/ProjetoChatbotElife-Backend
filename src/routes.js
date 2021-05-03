const {ErrorMiddleware, FormatValidator} = require("./util/middlewares");
const newsRoutes = require('./routes/newsRoutes.js');
const botWebhookRoute = require('./routes/botWebhookRoute.js');
const authRoute = require('./routes/authRoute.js');


module.exports = app => {
    FormatValidator(app);
    authRoute(app);
    botWebhookRoute(app);
    newsRoutes(app);
    ErrorMiddleware(app);
}
