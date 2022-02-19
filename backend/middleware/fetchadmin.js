var jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const fetchadmin = (req, res, next) => {
    // Get the vendor from the jwt token and add id to req object
    const token = req.header('auth-token-admin');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token " })
    }
   // console.log(data.admin)
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.admin = data.admin;
        next();
    } catch (err) {
        const data = jwt.verify(token, JWT_SECRET);
        console.log(err)
        res.status(401).send({ error: err })
    }

}

module.exports = fetchadmin;