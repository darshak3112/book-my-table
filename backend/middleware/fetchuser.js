var jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token 1" })
    }
    try {

        // aa chale chhe

        //const data = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5OWJhZjg3MTA4NDg0ZGI5NzAxNWYxIn0sImlhdCI6MTYzNzQ2NDgyNH0.l1KoyWbbCzucxPFF7cbEzRaXFaHCG6wOEizghvEGvl0", JWT_SECRET);

        // aa nai chalatu

        const data = jwt.verify(token, JWT_SECRET);

        console.log(token)
        req.user = data.user;
        next();
    } catch (err) {
        res.status(401).send({ error: err })
    }

}


module.exports = fetchuser;