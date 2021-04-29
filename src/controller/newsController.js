const {NewsSerializer} = require("../service/serializer");

function sendResponse(res, status, result) {
    res.status(status);
    const serializer = new NewsSerializer(res.getHeader('Content-Type'));
    res.send(serializer.serialize(result));
}

module.exports = {
    listNews: (req, res, next) => {
        res.status(200);
        res.send("Funcionando");
    },
}
