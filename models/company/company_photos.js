const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var photosSchema = new Schema ({
	isFeatured: Boolean,
	category: String,
	source: String
})

module.exports = mongoose.model('company_photos', photosSchema);