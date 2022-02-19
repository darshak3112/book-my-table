const express = require('express');
const Admin = require('../models/Admin');
const Restaurant = require('../models/Restaurant_information');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult, sanitize } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchadmin = require('../middleware/fetchadmin');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1:  POST "/api/admin/login". login required
router.post('/login', [
    body('Mobile_no', 'Enter a valid mobile number').isLength({ min: 10 }),
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
        let admin = await Admin.findOne({ Mobile_no });
        if (!admin) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(Password, admin.Password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            admin: {
                id: admin._id
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

// ROUTE 2: get all restaurent : POST "/api/admin/allUser". login required
router.post('/allUser', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allUser = await Restaurant.find();
        if (!allUser) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allUser: {
                    id: allUser._id
                }
            }
            res.json(allUser);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: get all active restaurent : POST "/api/admin/activeres". login required
router.post('/activeres', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allUser = await Restaurant.find({ Active: true });
        if (!allUser) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allUser: {
                    id: allUser._id
                }
            }
            res.json(allUser);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 4: get all pending restaurent : POST "/api/admin/pendingres". login required
router.post('/pendingres', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allUser = await Restaurant.find({ Active: false });
        if (!allUser) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allUser: {
                    id: allUser._id
                }
            }
           
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 5: get all users : POST "/api/admin/alluser". login required
router.post('/getuser', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allUser = await User.find();
        if (!allUser) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allUser: {
                    id: allUser._id
                }
            }
            res.json(allUser);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 6: get all users : POST "/api/admin/deleteuser". login required
router.post('/getuser', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allUser = await User.find();
        if (!allUser) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allUser: {
                    id: allUser._id
                }
            }
            res.json(allUser);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router