const NewsModel = require('../../model/News/NewsModel.js');

module.exports = {
    create: async news => {
        const instance = new NewsModel(news);
        const result = await instance.save();
        return result.toObject();
    }
}
