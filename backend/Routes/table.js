const express = require('express');
const { body, validationResult } = require('express-validator');
const Restaurant = require('../models/Restaurant_information');
const Table = require('../models/Table');
const User = require('../models/User');
const Booking = require('../models/Booking');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/addtable', async (req, res) => {

    const token = req.header('auth-token-res');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token " })
    }
    const data = jwt.verify(token, JWT_SECRET);
    //console.log(data.restaurant.id)

    let restaurant = await Restaurant.findById(data.restaurant.id);

    if (!restaurant) {
        res.status(404).send({ error: "not found" })
    }

    for (let i = 0; i < restaurant.Table_require; i++) {
        console.log(i);
        let table = new Table({
            Restaurant: data.restaurant.id,
            Table_No: i + 1
        })
        table = await table.save();
        console.log(table)

    }
    res.send("table created");

})

router.post('/tablebooking', fetchuser, [
    body('Mobile', 'Enter a valid mobile number').isLength({ min: 10 })]
    , async (req, res) => {

        console.log(req.user.id);
        const user = await User.findById(req.user.id);
        //console.log(user)
        if (!user) {
            res.status(404).send("not found");
        }
        const { Person, Name, Mobile, Request, Date, Time, Restaurant1 } = req.body;

        //console.log(Date, Time)
        const restaurent = Restaurant.findById(Restaurant1)
        let book = await Booking.find({ Date, Time });
        console.log("thi is "+ book)
        if (!book) {
            book = new Booking({
                User: user.id,
                Restaurant : Restaurant1,
                Mobile_no_user: user.Mobile_no,
                Mobile_no_guest: Mobile,
                Guest_Name: Name,
                Guest_Total: Person,
                Date,
                Time,
                Request
            })
            book = await book.save();
            //console.log(book)
            res.send(book)

        } else {
            res.status(404).send("not available");
        }

    })

module.exports = router;