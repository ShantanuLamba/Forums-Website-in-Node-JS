const mongoose = require('mongoose');//import mongoose

//create schema
const Schema2 = new mongoose.Schema({
    name: {type: String},
    answer: {type: String,},
    id: {type: String}
});

const model2 = mongoose.model("answers", Schema2);
module.exports = model2;//export the MongoDB Model 