const express = require('express')
const connectDB = require('./db');
const dotenv = require('dotenv');
const  userRouter =require('./routers/Userrouter');
var cors = require('cors')
dotenv.config();
const app = express()
const port = 3000

connectDB()

app.use(express.json());
app.use(cors())
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})