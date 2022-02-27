const express = require('express');
const Table = require('../models/Table');
const router = express.Router();
const { body, validationResult, sanitize } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchres = require('../middleware/fetchres');
require('dotenv').config()

// add restaurent details login required
router.post('/addres', fetchres, [
    body('Name', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('City', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Area', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Contact', 'Enter a valid mobile number').isLength({ min: 10 }),
    body('Address', 'Enter a valid Address').isLength({ min: 10 }),
], async (req, res) => {
    try {
        const { Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Active, Table_require } = req.body;
        const errors = validationResult(req);
        let fRes = await Restaurant.findOne({ Contact: req.body.Contact });

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (fRes) {
            return res.status(400).json({ error: "Sorry a user with this Mobile num already exists" })
        }

        const restaurant = new Restaurant({
            Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Active, Table_require, Vendor: req.vendor.id
        })
        const savedRes = await restaurant.save();

        const data = {
            savedRes: {
                id: savedRes.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        res.json(savedRes);
        res.json({ authtoken });
        console.log(savedRes.id)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})