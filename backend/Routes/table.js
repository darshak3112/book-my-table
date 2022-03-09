const express = require('express');
const Restaurant = require('../models/Restaurant_information');
const Table = require('../models/Table');
const router = express.Router();
var jwt = require('jsonwebtoken');
var fetchres = require('../middleware/fetchres');
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
            Table_No: i+1
        })
        table = await table.save();
        console.log(table)
             
    }
    res.send("table created");

    // let todo = await Restaurant.find();
    // let result = todo.map(a => a._id.toString());
    // //console.log(result[2])
    // let name = new Array(Object.keys(todo).length);
    // //let vRes = Restaurant.find({ Vendor: dVendor });
    //     for (let i = 0; i < Object.keys(todo).length; i++) {
    //         name[i] = result[i];
    //         console.log(name[i])
    // }
    


})

module.exports = router;