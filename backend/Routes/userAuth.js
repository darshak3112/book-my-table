const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult, sanitize } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
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
        let user = await User.findOne({ Email: req.body.Email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        console.log(user)
        user = await User.findOne({ Mobile_no: req.body.Mobile_no });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this mobile number already exists" })
        }


        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(req.body.Password, salt);

        // console.log(await bcrypt.hash(req.body.Password, salt));
        // res.send({secPass});


        // Create a new user
        user = await User.create({
            Name: req.body.Name,
            Password: pass,
            Email: req.body.Email,
            Mobile_no: req.body.Mobile_no
        });
        const data = {
            user: {
                id: user.id
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
router.post('/loginuser', [
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
        let user = await User.findOne({ Mobile_no });
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(Password, user.Password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user._id
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
router.get('/getuser', fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    console.log(user);
    res.send(user)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//update user
router.patch('/updateuser/:id', fetchuser, [
    body('Name', 'Enter a valid name').isLength({ min: 2 }),
    body('Email', 'Enter a valid email').isEmail()   
], async (req, res) => {
    try {
        const { Name, Email } = req.body;
        let success = false;
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("not found") }
        //console.log(user.Password)
        //new object
        const newUser = {};
        if (Name) { newUser.Name = Name };
        if (Email) { newUser.Email = Email };
        

        let uUser = await User.findById(req.params.id);
        if (!uUser) { return res.status(404).send("not found") }

    
        if (uUser.id !== req.user.id) {
            return res.status(401).send("not allowed");
        }

        uUser = await User.findByIdAndUpdate(req.params.id, { $set: newUser })
        res.json({ uUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})
module.exports = router