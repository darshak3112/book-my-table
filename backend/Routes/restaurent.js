const express = require('express');
const fetchvendor = require('../middleware/fetchvendor');
const Restaurant = require('../models/Restaurant_information');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// add restaurent details login required

router.post('/addres', fetchvendor, [
    body('Name', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('City', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Area', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Contact', 'Enter a valid mobile number').isLength({ min: 10 }),
], async (req, res) => {
    try {
        const { Name, City, Area, TimeOpen, TimeClose, Contact, Facility } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const restaurant = new Restaurant({
            Name, City, Area, TimeOpen, TimeClose, Contact, Facility, User: req.vendor.id
        })
        const savedRes = await restaurant.save();

        res.json(savedRes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})
module.exports = router;