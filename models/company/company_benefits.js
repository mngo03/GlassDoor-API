const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var benefitsSchema = new Schema ({
	country: String,
	title: String,
	description: String
})

module.exports = mongoose.model('company_benefits', benefitsSchema);