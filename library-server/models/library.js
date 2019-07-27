var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Library = new Schema ({
    id: String,
    title: String,
    image: String,
    writer: String,
    category: String,
    location: String,
})

module.exports = mongoose.model('Library', Library)