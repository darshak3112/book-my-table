const express = require('express');
const { body, validationResult } = require('express-validator');
const Restaurant = require('../models/Restaurant_information');
const Table = require('../models/Table');
const User = require('../models/User');
const Vendor = require('../models/Vendor');
const Booking = require('../models/Booking');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const fetchvendor = require('../middleware/fetchvendor');
const { findByIdAndDelete } = require('../models/User');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

//for table update
router.patch('/updatetable/:id', fetchvendor, async (req, res) => {
    try {

        let success = false;
        const { table_no } = req.body;
        let restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            res.status(404).send({ error: "not found" });
        }

        let table = await Table.find({ Request: req.params.id });
console.log(req.params.id)

        if (restaurant.Table_require > table_no) { 
            success = true;
            res.status(200).json({ success });
        }
        else {
            for (let i = restaurant.Table_require+1; i <=table_no; i++) {
                console.log(i);
                let table = new Table({
                    Restaurant: req.params.id,
                    Table_No: i + 1
                })
                table = await table.save();
                console.log(table)
    
            }
            success = true;
            res.json({ success, "done": "table created" });
        }

       
    } catch (err) {
        console.log(err)
        res.send(500, "server error");
    }
})

//for table creation
router.post('/addtable', fetchvendor, async (req, res) => {
    try {
        let success = false;
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
        success = true;
        res.json({ success, "done": "table created" });
    } catch (err) {
        console.log(err)
        res.send(500, "server error");
    }
})

//for showing data
router.post('/showbooking', fetchuser, async (req, res) => {
    try {
        const { restaurent1, Date, oTime, cTime } = req.body;
        // const newLocal = "622ca4e75deb66d7d9645387";
        let restaurant = await Restaurant.findById(restaurent1);
        console.log(restaurant)
        let history = await Booking.find({ Restaurant: restaurent1, Date })
        restaurant = restaurant.Table_require;
        let ary = new Array();
        console.log(history)


        console.log(restaurant)
        for (let i = oTime; i < cTime; i++) {
            // let ex = i.toString();
            let data = history.filter(e => e.Time === i.toString());
            let count = Object.keys(data).length;
            if (restaurant === count) {
                ary.push({ "time": i.toString() })
            }
            // console.log(typeof ex)

        }
        console.log(ary);
        res.json(ary);

    } catch (err) {
        res.status(500).send("server error");
    }

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

            // if (Mobile.length() < 10) {
            //     res.status(404).send("enter valid monile number");
            // }

            //console.log(Date, Time)
            const restaurent = await Restaurant.findById(Restaurant1)
            let book = await Booking.find({ Date, Time });
            const size = Object.keys(book).length;
            const rSize = restaurent.Table_require;
            //console.log("size : ", size)
            if (rSize !== size) {
                let table = await Table.findOne({ Restaurant: Restaurant1, Table_No: size + 1 });
                //let sTable = await Table.findOne({ Restaurant: Restaurant1, Table_No: size });
                let sTable = table._id;
                let Table_No = table.Table_No;
                let Restaurant_Name = restaurent.Name;

                console.log("thi is ", Date.length);
                if (Person.length > 0 && Name.length > 0 && Mobile.length < 13 && Date.length > 0) {
                    console.log("hello")
                    book = new Booking({
                        Vendor: restaurent.Vendor,
                        User: user.id,
                        Restaurant: Restaurant1,
                        Mobile_no_user: user.Mobile_no,
                        Mobile_no_guest: Mobile,
                        Guest_Name: Name,
                        Guest_Total: Person,
                        Table: sTable,
                        Table_No,
                        Restaurant_Name,
                        Date,
                        Time,
                        Request
                    })
                    //console.log("this is ",book)
                    book = await book.save();
                    //console.log(book)
                    res.status(200).json({ "success": "completed" });

                } else {
                    res.status(404).json({ "fill": "please fill all details" });

                }
            } else {
                res.status(404).json({ "error": "not available" });
            }
        } catch (err) {
            res.status(500).send("server error");
        }

    })

//for booking history user
router.post('/bookinghistory', fetchuser, async (req, res) => {
    try {
        //console.log(req.user.id);
        const user = await User.findById(req.user.id);
        //console.log(user)
        if (!user) {
            res.status(404).send("not found");
        }


        let book = await Booking.find({ User: req.user.id }).sort({ Boking_Date: -1 });


        if (book) {
            res.json(book)

        } else {
            res.status(404).json({ "error": "not available" });
        }
    } catch (err) {
        res.status(500).send("server error");
    }

})

//for booking history vendor
router.post('/bookinghistoryvendor', fetchvendor, async (req, res) => {

    //console.log(req.vendor.id);
    try {
        const vendor = await Vendor.findById(req.vendor.id);
        //console.log(vendor)
        if (!vendor) {
            res.status(404).send("not found");
        }


        let book = await Booking.find({ Vendor: req.vendor.id }).sort({ Boking_Date: -1 });


        if (book) {
            res.json(book)

        } else {
            res.status(404).json({ "error": "not available" });
        }
    } catch (err) {
        res.status(500).send("server error");
    }

})


//for canceltable
router.delete('/cancelbooking/:id', fetchuser, async (req, res) => {
    let success = false;
    try {
        let tableData = await Booking.findById(req.params.id);

        const getDate = () => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return day + "/" + month + "/" + year;

        }

        const getTime = () => {
            let date = new Date();
            let time = date.getHours();
            return time.toString();;
        }

        if (tableData) {

            // console.log(tableData.User.toString())
            if (req.user.id === tableData.User.toString()) {

                if (tableData.Date === getDate() && tableData.Time > getTime()) {
                    let cBooking = await Booking.findByIdAndDelete(req.params.id);
                    if (cBooking) {
                        success = true
                        res.status(200).json({ success })
                    }

                }
                else if (tableData.Date > getDate()) {
                    let cBooking = await Booking.findByIdAndDelete(req.params.id);
                    if (cBooking) {
                        success = true
                        res.status(200).json({ success })
                    }
                } else {
                    success = false;
                    res.status(404).json({ success, error: "time exceed" })
                }

            } else {
                success = false;
                res.status(404).json({ success, error: "not available" })
            }
        } else {
            success = false;
            res.status(404).json({ success, error: "not available" })
        }

    } catch (err) {
        success = false
        res.status(500).json({ success, error: "server error" });
    }

})

module.exports = router;