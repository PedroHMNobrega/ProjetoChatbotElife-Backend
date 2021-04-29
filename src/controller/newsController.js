const News = require("../model/News/News.js");
const {NewsSerializer} = require("../service/serializer");
const repository = require("../service/repositories/NewsRepository.js");

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
    addNews: async (req, res, next) => {
        const {imgUrl, title, description, category, url} = req.body;
        try {
            const news = new News(imgUrl, title, description, category, url);
            const result = await repository.create(news);
            sendResponse(res, 201, result);
        } catch (error) {
            next(error);
        }
    }
}
