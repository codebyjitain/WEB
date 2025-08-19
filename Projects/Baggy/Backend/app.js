const express = require('express')
const app = express()
const connectDB = require('./config/db-config')
const ownerRoute = require('./routes/ownerRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const indexRoute = require('./routes/indexRoute')
const cors = require('cors')
const path = require('path')

app.use(cors({
    credentials: true // Crucial for sending/receiving cookies
}));

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/image",express.static(path.join(__dirname , 'public/images/uploads')))

app.use("/", indexRoute)
app.use('/owner', ownerRoute)
app.use('/product',  productRoute)
app.use('/user', userRoute)
    
app.listen(3000)



// for large projects use config instead of .env and also use NODE_ENV for differentate between production and development
