const connetToMongo = require('./db');
const cors = require('cors')

connetToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

// //availabel routes 

const userRouter = require('./routes/Upload');
app.use('/image', userRouter);
app.use('/api/userAuth', require('./routes/userAuth'))
app.use('/api/vendorAuth', require('./routes/vendorAuth'))
app.use('/api/restaurent',require('./routes/restaurent'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`BookMyTable app listening at http://localhost:${port}`)
})