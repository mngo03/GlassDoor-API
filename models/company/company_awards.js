const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var awardsSchema = new Schema ({
	name: String,
	source: String,
	year: Number,
	website: String
})

module.exports = mongoose.model('company_awards', awardsSchema);