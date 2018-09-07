const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var locationSchema = new Schema ({
    name: String,
    address: String,
    city: String,
    zip_code: Number
})

module.exports = mongoose.model('company_locations', locationSchema);