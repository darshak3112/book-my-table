var jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const fetchvendor = (req, res, next) => {
    // Get the vendor from the jwt token and add id to req object
    const token = req.header('auth-token-vendor');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token " })
    }
    // console.log(data.user)
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.vendor = data.vendor;
        next();
    } catch (err) {
        res.status(401).send({ error: err })
    }

}

module.exports = fetchvendor;