var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Loanbook = new Schema ({
    cardNumber: String,
    id: String,
    expiredDate: Date,
    forfeit: Number,
    status: String,
})

module.exports = mongoose.model('Loanbook', Loanbook)