const News = require("../model/News/News.js");
const {NewsSerializer} = require("../service/serializer");
const repository = require("../service/repositories/NewsRepository.js");
const sorting = require("../util/helpers/sorting.js");

function sendResponse(res, status, result) {
    res.status(status);
    const serializer = new NewsSerializer(res.getHeader('Content-Type'));
    res.send(serializer.serialize(result));
}

function endResponse(res, status) {
    res.status(status);
    res.end();
}

module.exports = {
    listNews: async (req, res, next) => {
        try {
            const news = await repository.listAll();
            news.sort(sorting.sortNewsByCreationDate);
            sendResponse(res, 200, news);
        } catch (error) {
            next(error);
        }
    },
    listTenByCategory: async (req, res, next) => {
        try {
            const news = await repository.listByCategory(req.params.category);
            news.sort(sorting.sortNewsByCreationDate);
            sendResponse(res, 200, news.slice(0, 10));
        } catch (error) {
            next(error);
        }
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
    },
    updateNews: async (req, res, next) => {
        const {imgUrl, title, description, category, url} = req.body;
        const id = req.params.id;

        try {
            const news = new News(imgUrl, title, description, category, url);
            await repository.updateNews(id, news);
            endResponse(res, 204);
        } catch (error) {
            next(error);
        }
    },
    deleteNews: async (req, res, next) => {
       const id = req.params.id;

       try {
           await repository.deleteNews(id);
           endResponse(res, 204);
       } catch (error) {
           next(error);
       }
    }
}
