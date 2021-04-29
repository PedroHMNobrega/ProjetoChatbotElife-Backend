const Serializer = require("./Serializer.js");

class NewsSerializer extends Serializer {
    constructor(contentType, extraFields = []) {
        super();
        this.contentType = contentType;
        this.publicFields = ['_id', 'imgUrl', 'title', 'description', 'category', 'url'].concat(extraFields);
    }
}

module.exports = NewsSerializer;
