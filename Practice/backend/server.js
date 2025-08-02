const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
const connectDB = require('./db') 

app.use(express.json())

connectDB()

// custom middleware

// const loginMiddleware = function (req,res,next) {
//   console.log("login");
//   next();
// }

// app.use(loginMiddleware)
// // app.use(express.json());


app.use('/api',route)
app.get('/', (req, res) => {
  console.log("Hello");
  // res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})