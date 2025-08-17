const express = require('express')
const app = express()
const connectDB = require('./config/db-config')
const ownerRoute = require('./routes/ownerRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const indexRoute = require('./routes/indexRoute')
const expressSession = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your Vite dev server URL
    credentials: true // Crucial for sending/receiving cookies
}));

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())
app.use("/", indexRoute)
app.use('/owner', ownerRoute)
app.use('/product', productRoute)
app.use('/user', userRoute)

app.listen(3000)



// for large projects use config instead of .env and also use NODE_ENV for differentate between production and development
