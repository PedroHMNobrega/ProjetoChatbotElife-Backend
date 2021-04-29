const NewsModel = require('../../model/News/NewsModel.js');
const DataBaseError = require("../../util/errors/DataBaseError.js");

module.exports = {
    create: async news => {
        const instance = new NewsModel(news);
        const result = await instance.save();
        return result.toObject();
    },
    listAll: async () => {
        const result = await NewsModel.find();
        return result.map(model => model.toObject());
    },
    listByCategory: async (category) => {
        const result = await NewsModel.find({category: category})
        return result.map(model => model.toObject());
    },
    updateNews: async (id, news) => {
        await NewsModel.updateOne({_id: id}, news);
    },
    deleteNews: async id => {
        const result = await NewsModel.deleteOne({_id: id});
        if(result.n === 0) {
            throw new DataBaseError('Essa noticia nao existe!');
        }
    }
}
