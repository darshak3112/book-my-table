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
    console.log(data.restaurant.id)

    let restaurant = await Restaurant.findById(data.restaurant.id);

    if (!restaurant) {
        res.status(404).send({ error: "not found" })
    }
   // console.log(restaurant.Table_require)
    let num = new Array(restaurant.Table_require);
   // console.log(num.length)

    for (let i = 0; i < restaurant.Table_require; i++) {
        let table = new Table({})
        table = await table.save();
        num[i] = table.id;
    
        try {
            let update = await Table.findOneAndUpdate({ _id: num[i] }, {
                $push: {
                    Restaurant: data.restaurant.id,
                    Table_No: i
                }
            })
        } catch (err) {
            res.send(err)
        }

       // console.log(update)
    }
    
    console.log(num)
    res.send(num)

})

module.exports = router;