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
        const { Name, City, Area, TimeOpen, TimeClose, Contact, Facility, Active, Table_require } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const restaurant = new Restaurant({
            Name, City, Area, TimeOpen, TimeClose, Contact, Facility, Active, Vendor: req.vendor.id, Table_require
        })
        const savedRes = await restaurant.save();

        res.json(savedRes);
        console.log(savedRes.id)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})


//get all restaurent to a perticular user
router.get('/fetchallres', fetchvendor, async (req, res) => {
    try {
        const allres = await Restaurant.find({ vendor: req.vendor.id });
        res.json(allres);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

//update restaurent information
router.patch('/updateres/:id', fetchvendor, async (req, res) => {
    try {
        const { Name, City, Area, TimeOpen, TimeClose, Contact, Facility, Active, Table_require } = req.body;
        //new object
        const newRes = {};
        if (Name) { newRes.Name = Name };
        if (City) { newRes.City = City };
        if (Area) { newRes.Area = Area };
        if (TimeOpen) { newRes.TimeOpen = TimeOpen };
        if (TimeClose) { newRes.TimeClose = TimeClose };
        if (Contact) { newRes.Contact = Contact };
        if (Facility) { newRes.Facility = Facility };
        if (Active) { newRes.Active = Active };
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


module.exports = router;


