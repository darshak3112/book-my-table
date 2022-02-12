var jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const fetchtable = (req, res, next) => {
    // Get the vendor from the jwt token and add id to req object
    const token = req.header('auth-token-res');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token " })
    }
   // console.log(data.table)
    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log("this is data   "+data._id)
        req.table = data.table;
        next();
    } catch (err) {
        res.status(401).send({ error: err })
    }

}

module.exports = fetchtable;