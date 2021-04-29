const Serializer = require("./Serializer.js");

class NewsSerializer extends Serializer {
    constructor(contentType, extraFields = []) {
        super();
        this.contentType = contentType;
        this.publicFields = [].concat(extraFields);
    }
}

module.exports = NewsSerializer;
