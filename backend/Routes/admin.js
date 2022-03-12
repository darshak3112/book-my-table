const express = require('express');
const Admin = require('../models/Admin');
const Restaurant = require('../models/Restaurant_information');
const User = require('../models/User');
const Vendor = require('../models/Vendor');
const Table = require('../models/Table');
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
router.post('/allres', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allres = await Restaurant.find();
        if (!allres) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allres: {
                    id: allres._id
                }
            }
            res.json(allres);
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
            res.json(allUser);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 5: get all delete restaurent : POST "/api/admin/deleteres". login required 
router.delete('/deleteres/:id', fetchadmin, async (req, res) => {
    try {

        //delete
        let dRes = await Restaurant.findById(req.params.id);
        if (!dRes) { return res.status(404).send("not found") }
        let dTable = await Table.deleteMany({ Restaurant: req.params.id });
        dRes = await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ "success": "restaurent has been deleted", dRes: dRes });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// ROUTE 6: get all users : POST "/api/admin/alluser". login required
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

// ROUTE 7: get all users : POST "/api/admin/deleteuser". login required
router.delete('/deleteuser/:id', fetchadmin, async (req, res) => {
    try {

        //delete
        let dUser = await User.findById(req.params.id);
        if (!dUser) { return res.status(404).send("not found") }

        console.log(req.params.id)
        // if (dUser.User.toString() !== req.user.id) {
        //     return res.status(401).send("not allowed");
        // }

        console.log(dUser)
        dUser = await User.findByIdAndDelete(req.params.id);
        console.log(dUser)
        res.json({ "success": "user has been deleted", dUser: dUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// ROUTE 8: get all vendors : POST "/api/admin/deleteuser". login required
router.post('/getvendor', fetchadmin, async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let allVendor = await Vendor.find();
        if (!allVendor) {
            success = false
            return res.status(400).json({ error: "server error" });
        } else {
            const data = {
                allVendor: {
                    id: allVendor._id
                }
            }
            res.json(allVendor);
        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 9: get all users : POST "/api/admin/deletevendor". login required
router.delete('/deletevendor/:id', fetchadmin, async (req, res) => {
    try {

        //delete
        let dVendor = await Vendor.findById(req.params.id);
        if (!dVendor) { return res.status(404).send("not found") }


        dVendor = dVendor._id.toString();

        let vRes = await Restaurant.find({ Vendor: req.params.id });

        let result = vRes.map(a => a._id.toString());

        let name = new Array(Object.keys(vRes).length);
        for (let i = 0; i < Object.keys(vRes).length; i++) {
            name[i] = result[i];
            console.log(name[i])
            let table = await Table.deleteMany({Restaurant:name[i]});
        }

        vRes = await Restaurant.deleteMany({ Vendor: dVendor });
        dVendor = await Vendor.findByIdAndDelete(req.params.id);
        console.log(dVendor)
        res.json({ "success": "vendor and restaurent has been deleted", dVendor: dVendor });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
});

// ROUTE 10: verify res: POST "/api/admin/verifyres". login required

router.patch('/verifyres/:id', fetchadmin, async (req, res) => {
    try {
        let uRes = await Restaurant.findById(req.params.id);
        if (!uRes) { return res.status(404).send("not found") }


        if (uRes.Active === false) {
            uRes = await Restaurant.findByIdAndUpdate(req.params.id, { Active: true })
        }
        if (uRes.Active === true) {
            uRes = await Restaurant.findByIdAndUpdate(req.params.id, { Active: false })
        }
        res.json({ uRes });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})


// ROUTE 11: fetch all res to a perticular user: POST "/api/admin/fetchallres". login required
router.post('/fetchallres/:id', fetchadmin, [
    body('Name', 'Enter a valid name').isLength({ min: 2 }),
    body('Email', 'Enter a valid email').isEmail(),
    body('Mobile_no', 'Enter a valid mobile number').isLength({ min: 10 })
], async (req, res) => {
    try {
        const allres = await Restaurant.find({ Vendor: req.params.id });
        res.json(allres);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// ROUTE 12: verify res: POST "/api/admin/updatevendor". login required

router.patch('/updatevendor/:id', fetchadmin, [
    body('Name', 'Enter a valid name').isLength({ min: 2 }),
    body('Email', 'Enter a valid email').isEmail(),
    body('Mobile_no', 'Enter a valid mobile number').isLength({ min: 10 })
], async (req, res) => {
    try {
        const { Name, Email, Mobile_no } = req.body;
        //new object
        const newVendor = {};
        if (Name) { newVendor.Name = Name };
        if (Email) { newVendor.Email = Email };
        if (Mobile_no) { newVendor.Mobile_no = Mobile_no };

        let uVendor = await Vendor.findById(req.params.id);
        console.log(uVendor);
        if (!uVendor) { return res.status(404).send("not found") }

        uVendor = await Vendor.findByIdAndUpdate(req.params.id, { $set: newVendor })
        console.log("thi is " + { newVendor });
        res.json({ uVendor });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// ROUTE 13: verify res: POST "/api/admin/updateuser". login required

router.patch('/updateuser/:id', fetchadmin, async (req, res) => {
    try {
        const { Name, Email, Mobile_no } = req.body;
        //new object
        const newUser = {};
        if (Name) { newUser.Name = Name };
        if (Email) { newUser.Email = Email };
        if (Mobile_no) { newUser.Mobile_no = Mobile_no };

        let uUser = await User.findById(req.params.id);
        console.log(uUser);
        if (!uUser) { return res.status(404).send("not found") }

        uUser = await User.findByIdAndUpdate(req.params.id, { $set: newUser })
        console.log("thi is " + { newUser });
        res.json({ uUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})
module.exports = router