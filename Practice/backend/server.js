// CRUD operation with ejs
const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./db')
const userModel = require('./models/user')
const { default: mongoose } = require('mongoose')

connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.render("crud")  
})

app.get('/read',async (req,res)=>{
  let allUsers =  await userModel.find()
  res.render("read" , {allUsers : allUsers})  
})

app.post('/create' , async (req,res) =>{
  
  const {name , email , image} = req.body;
  const user = userModel({name,email,image});
  await user.save();
  res.redirect('/')
})

app.get('/delete/:_id',async (req,res)=>{
  
  await userModel.findOneAndDelete({_id : req.params._id})
  res.redirect("/read")
})

app.get('/edit/:_id',async (req,res)=>{
  let user = await userModel.findById(req.params._id)
  console.log(user)
  res.render("edituser", {user: user , id : req.params._id})
})

app.post('/update' , async (req,res) =>{
  
  const {name , id , email , image} = req.body;
  const user = await userModel.findOneAndUpdate({_id:id},{name,email,image});
  res.redirect('/')
})

app.listen(3000)              
















// const express = require('express')
// const app = express()
// const path = require('path')
// const fs = require('node:fs')
// const { log } = require('node:console')


// app.set("view engine", "ejs")
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, "public")))


// app.get("/", (req, res) => {
//   fs.readdir(`./files`, function (err, files) {
//     res.render('index', { files: files })
//   })
// })

// app.get("/file/:filename", (req, res) => {
//   fs.readFile(`./files/${req.params.filename}`,"utf-8", function (err, filedata) {
//     res.render("show" , {filename : req.params.filename.split('.')[0] , filedata : filedata} )
//   })
// })

// app.get("/edit/:filename" , (req,res)=>{
  
//   fs.readFile(`./files/${req.params.filename}`,"utf-8", function (err, filedata) {
//     res.render("edit",{filename: req.params.filename.split('.')[0] , filedata: filedata})  
//   })
// })

// app.post('/create', (req, res) => {

//   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
//     res.redirect("/")
//   })

// })

// app.post('/update', (req, res) => {

//   fs.writeFile(`./files/${req.body.prev}.txt`, req.body.details, function (err) {
    
//     fs.rename(`./files/${req.body.prev}.txt`, `./files/${req.body.title}.txt` , (err)=>{
//       res.redirect('/')
//     })
//   })

// })

// app.listen(3000)
































// const path = require('path')
// const express = require('express')
// const app = express()
// const port = 3000
// // const route = require('./routes/route')
// // const connectDB = require('./db')


// // connectDB()

// // custom middleware

// // const loginMiddleware = function (req,res,next) {
// //   console.log("login");
// //   next();
// // }

// // app.use(loginMiddleware)
// // // app.use(express.json());

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// // app.use(express.static(path.join(__dirname, 'public')))
// app.set('view engine' , 'ejs')
// // console.log(path.join(__dirname, 'public'))

// // app.use('/api', route)

// app.get('/', (req, res) => {
//   // console.log("Hello");
//   // res.send('Hello World!')
//   res.render("index")

// })

// app.get('/dynamic/:x' , (req,res) =>{
//   // req.params.x --> for geeting x
//   res.send("It is running")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })