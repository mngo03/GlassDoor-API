const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ceoSchema = new Schema ({
    first_name: String,
    last_name: String,
    title: String
})

module.exports = mongoose.model('company_ceos', ceoSchema);