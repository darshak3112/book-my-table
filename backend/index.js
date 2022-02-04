const connetToMongo = require('./db');
const cors = require('cors')
require("dotenv").config();
const express = require("express");
const app = express();

connetToMongo();
const port = 5000

app.use(cors())
app.use(express.json());

app.use("/file", require("./routes/upload"));
app.use('/api/userAuth', require('./routes/userAuth'))
app.use('/api/vendorAuth', require('./routes/vendorAuth'))
app.use('/api/restaurent',require('./routes/restaurent'))

app.listen(port, () => {
  console.log(`BookMyTable app listening at http://localhost:${port}`)
})
