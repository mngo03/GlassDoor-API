var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var ceo = require('../../models/company/company_ceos');
// CREATES A NEW CEO
router.post('/ceo', function (req, res) {
    ceo.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            title : req.body.title
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// RETURNS ALL THE CEOS IN THE DATABASE
router.get('/ceo', function (req, res) {
    ceo.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

module.exports = router;