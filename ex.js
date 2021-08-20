const mongoose = require('mongoose');//import mongoose

//create schema
const Schema = new mongoose.Schema({
    name: {type: String},
    proglang: {type: String},
    question: {type: String,}
});

const model = mongoose.model("threads", Schema);
module.exports = model;//export the MongoDB Model 