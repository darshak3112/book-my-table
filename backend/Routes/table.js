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

//for table creation
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
        // console.log(i);
        let table = new Table({
            Restaurant: data.restaurant.id,
            Table_No: i + 1
        })
        table = await table.save();
        //console.log(table)

    }
    res.send("table created");

})

//for table booking
router.post('/tablebooking', fetchuser, [
    body('Mobile', 'Enter a valid mobile number').isLength({ min: 10 })]
    , async (req, res) => {

        //console.log(req.user.id);
        try {
            const user = await User.findById(req.user.id);
            //console.log(user)
            if (!user) {
                res.status(404).send("not found");
            }
            const { Person, Name, Mobile, Request, Date, Time, Restaurant1 } = req.body;

            //console.log(Date, Time)
            const restaurent = await Restaurant.findById(Restaurant1)
            let book = await Booking.find({ Date, Time });
            const size = Object.keys(book).length;
            const rSize = restaurent.Table_require;
            //console.log("size : ", size)
            if (rSize !== size) {
                let table = await Table.findOne({ Restaurant: Restaurant1, Table_No: size + 1 });
                //let sTable = await Table.findOne({ Restaurant: Restaurant1, Table_No: size });
                let sTable = table._id.toString();
                //console.log("restau : ",restaurent)

                // console.log("thi is ", sTable);

                book = new Booking({
                    User: user.id,
                    Restaurant: Restaurant1,
                    Mobile_no_user: user.Mobile_no,
                    Mobile_no_guest: Mobile,
                    Guest_Name: Name,
                    Guest_Total: Person,
                    Table: sTable,
                    Date,
                    Time,
                    Request
                })
                book = await book.save();
                console.log(book)
                res.status(200).json({ "success": "completed" });


            } else {
                res.status(404).json({ "error": "not available" });
            }
        } catch (err) {
            res.status(500).send("server error");
        }

    })

//for booking history user
router.post('/bookinghistory', fetchuser, async (req, res) => {

    //console.log(req.user.id);
    const user = await User.findById(req.user.id);
    //console.log(user)
    if (!user) {
        res.status(404).send("not found");
    }

    try {
        let book = await Booking.find({ User: req.user.id });


        if (book) {
            res.json(book)

        } else {
            res.status(404).json({ "error": "not available" });
        }
    } catch (err) {
        res.status(500).send("server error");
    }

})


module.exports = router;