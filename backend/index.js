const connetToMongo = require('./db');
const cors = require('cors')

connetToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

// //availabel routes 
app.use('/api/userAuth', require('./routes/userAuth'))
app.use('/api/vendorAuth', require('./routes/vendorAuth'))
app.use('/api/restaurent',require('./routes/restaurent'))
app.use("/api/img",require ('./routes/resImg'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`BookMyTable app listening at http://localhost:${port}`)
})