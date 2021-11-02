const connetToMongo = require('./db');
const cors = require('cors')

connetToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

//availabel routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`i-notebook app listening at http://localhost:${port}`)
})