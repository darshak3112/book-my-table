const express = require('express');
const Vendor = require('../models/Vendor');
const router = express.Router();
const { body, validationResult, sanitize } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchvendor = require('../middleware/fetchvendor');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createvendor', [
    body('Name', 'Enter a valid name').isLength({ min: 2 }),
    body('Email', 'Enter a valid email').isEmail(),
    body('Mobile_no', 'Enter a valid mobile number').isLength({ min: 10 }),
    body('Password', 'Password must be atleast 6 characters').isLength({ min: 6 })
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already
        let vendor = await Vendor.findOne({ Email: req.body.Email });
        if (vendor) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        console.log(vendor)
        vendor = await Vendor.findOne({ Mobile_no: req.body.Mobile_no });
        if (vendor) {
            return res.status(400).json({ error: "Sorry a user with this mobile number already exists" })
        }


        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(req.body.Password, salt);

        // console.log(await bcrypt.hash(req.body.Password, salt));
        // res.send({secPass});


        // Create a new Vendor
        vendor = await Vendor.create({
            Name: req.body.Name,
            Password: pass,
            Email: req.body.Email,
            Mobile_no: req.body.Mobile_no
        });
        const data = {
            vendor: {
                id: vendor.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);


        // res.json(user)
        res.json({ authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.get('/loginvendor', [
    body('Mobile_no', 'Enter a valid mobile number').isLength({ min: 3 }),
    body('Password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { Mobile_no, Password } = req.body;
    try {
        let vendor = await Vendor.findOne({ Mobile_no });
        if (!vendor) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(Password, vendor.Password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            vendor: {
                id: vendor._id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getvendor', fetchvendor, async (req, res) => {

  try {
    const vendorId = req.vendor.id;
    const vendor = await Vendor.findById(vendorId);
    console.log(vendor);
    res.send(vendor)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router