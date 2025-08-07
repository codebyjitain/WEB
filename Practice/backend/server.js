const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
const connectDB = require('./db')


// connectDB()

// custom middleware

// const loginMiddleware = function (req,res,next) {
//   console.log("login");
//   next();
// }

// app.use(loginMiddleware)
// // app.use(express.json());

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'ejs')


// app.use('/api', route)

app.get('/', (req, res) => {
  // console.log("Hello");
  // res.send('Hello World!')
  res.render("index")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})