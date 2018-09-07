const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var companySchema = new Schema ({
	name: String,
	website: String,
	hqCity: String,
	yearFounded: Number,
	type: String,
	sector: String,
	industry: String,
	totalEmployees: String,
	annualRevenue: Number,
	status: String,
	affiliated_companies: [String],
	competitors: [String],
	stock_symbol: String,
	logo: String,
	description: String,
	mission: String,
	company_ceos: {
        type: String,
        ref: 'company_ceos',
        required: false
    },
	company_locations: [{
        type: String,
        ref: 'company_locations',
        required: false
    }],
	company_benefits: [{
        type: String,
        ref: 'company_benefits',
        required: false
    }],
	company_awards: [{
        type: String,
        ref: 'company_awards',
        required: false
    }],
	company_photos: [{
        type: String,
        ref: 'company_photos',
        required: false
    }],
	company_updates: [{
        type: String,
        ref: 'company_updates',
        required: false
    }]
})

module.exports = mongoose.model('company_companies', companySchema);