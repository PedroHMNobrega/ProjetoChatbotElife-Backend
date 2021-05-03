const {ErrorSerializer} = require("../../service/serializer");

module.exports = app => {
    app.use((error, req, res, next) => {
        if(error.name === 'AuthError') {
            res.status(403);
        } else {
            res.status(400);
        }
        const serializer = new ErrorSerializer(res.getHeader('Content-Type'), ['message']);
        res.send(serializer.serialize(error));
    });
}
