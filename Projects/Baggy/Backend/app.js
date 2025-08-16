const express = require('express')
const app = express()
const connectDB = require('./config/db-config')
const ownerRoute = require('./routes/ownerRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/owner' , ownerRoute)
app.use('/product' , productRoute)
app.use('/user' , userRoute)

app.get('/' , (req,res)=>{
    res.send("Hello")
})
app.listen(3000)