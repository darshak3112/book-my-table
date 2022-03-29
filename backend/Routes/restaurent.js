const express = require('express');
const fetchvendor = require('../middleware/fetchvendor');
const Restaurant = require('../models/Restaurant_information');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
require('dotenv').config()
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


// add restaurent details login required
router.post('/addres', fetchvendor, [
    body('Name', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('City', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Area', 'name should be atlest 2 char').isLength({ min: 2 }),
    body('Contact', 'Enter a valid mobile number').isLength({ min: 10 }),
    body('Address', 'Enter a valid Address').isLength({ min: 10 }),
], async (req, res) => {
    try {
        const { Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Table_require } = req.body;
        const errors = validationResult(req);
        let fRes = await Restaurant.findOne({ Contact: req.body.Contact });

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (fRes) {
            return res.status(400).json({ error: "Sorry a user with this Mobile num already exists" })
        }

        let restaurant = new Restaurant({
            Name, City, Area, FoodType, FoodCategory, Address, TimeOpen, TimeClose, Contact, Facility, Holiday, Table_require, Vendor: req.vendor.id
        })
        restaurant = await restaurant.save();
        console.log(restaurant)

        const data = {
            restaurant: {
                id: restaurant.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        console.log("this is "+authtoken);

        res.json({authtoken});
    
       // console.log(savedRes.id)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})



//get all restaurent to a perticular user
router.get('/fetchallres', fetchvendor, async (req, res) => {
    try {
        const allres = await Restaurant.find({ Vendor: req.vendor.id });
        res.json(allres);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

//update restaurent information
router.patch('/updateres/:id', fetchvendor, async (req, res) => {
    try {
        const { Name, City, Area, FoodCategory, FoodType, TimeOpen, TimeClose, Contact, Facility, Holiday, Active, Table_require } = req.body;
        //new object
        const newRes = {};
        if (Name) { newRes.Name = Name };
        if (City) { newRes.City = City };
        if (Area) { newRes.Area = Area };
        if (FoodCategory) { newRes.FoodCategory = FoodCategory };
        if (FoodType) { newRes.FoodType = FoodType };
        if (TimeOpen) { newRes.TimeOpen = TimeOpen };
        if (TimeClose) { newRes.TimeClose = TimeClose };
        if (Contact) { newRes.Contact = Contact };
        if (Facility) { newRes.Facility = Facility };
        if (Holiday) { newRes.Holiday = Holiday };
        newRes.Active = false;
        if (Table_require) { newRes.Table_require = Table_require }

        let uRes = await Restaurant.findById(req.params.id);
        if (!uRes) { return res.status(404).send("not found") }

        console.log(req.vendor.id)
        console.log(uRes.Vendor.toString())
        if (uRes.Vendor.toString() !== req.vendor.id) {
            return res.status(401).send("not allowed");
        }

        uRes = await Restaurant.findByIdAndUpdate(req.params.id, { $set: newRes })
        res.json({ uRes });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

//delete restaurent 
router.delete('/deleteres/:id', fetchvendor, async (req, res) => {
    try {

        //delete
        let dNote = await Restaurant.findById(req.params.id);
        if (!dNote) { return res.status(404).send("not found") }

        if (dNote.Vendor.toString() !== req.vendor.id) {
            return res.status(401).send("not allowed");
        }

        dNote = await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ "success": "note has been deleted", dNote: dNote });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// get all resturent
router.get('/getallrest', async (req, res) => {
    try {
        const allres = await Restaurant.find({ Active: true });
        res.json(allres);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

module.exports = router;

