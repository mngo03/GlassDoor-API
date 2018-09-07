const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var updatesSchema = new Schema ({
	description: String,
	media: String
})

module.exports = mongoose.model('company_updates', updatesSchema);