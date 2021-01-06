const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    sourceURL: String,
    dateCreated: String,
    lastUsed: String,
    amountUsed: Number
})

module.exports = mongoose.model("ShortCode", schema)