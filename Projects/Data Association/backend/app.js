
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./db')
const bcrypt = require('bcrypt')
const userModel = require('./models/user')
const postModel = require('./models/post')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const loggedIn = require('./middlewares/loggedIn')
const post = require('./models/post')

dotenv.config()
// connect DB
connectDB()



app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname,"public")))





















app.get("/", (req,res)=>{
    res.render("index")
})

// Create User
app.post('/create' , (req,res)=>{
    const {name , username , age , password , email} = req.body

    bcrypt.genSalt(10 , function (err, salt) {
        bcrypt.hash(password , salt , async function (err , hash) {
            const user = userModel({
                name, 
                username,
                age,
                password : hash,
                email
            })

            await user.save()

            const token = jwt .sign({email: email}, process.env.JWT_SECRET_KEY)
            res.cookie("token" , token)
            res.redirect("/login")
        })
        
    })
})

app.get("/login" ,(req,res)=>{
    res.render("login")
})

app.get("/logout" ,(req,res)=>{
    res.cookie("token" , "")
    res.redirect("/login")
})

app.get("/profile" , loggedIn , async (req,res) =>{
    const user = await userModel.findOne({email : req.user.email}).populate("posts")
    res.render("profile" , {user})
})

app.post("/login", async (req,res)=>{
    const {email , password} = req.body

    const user = await userModel.findOne({email})
    if(!user) res.send("SomeThing Went Wrong")

    bcrypt.compare(password , user.password , function (err,result) {
        if(result){
            const token = jwt .sign({email: email}, process.env.JWT_SECRET_KEY)
            res.cookie("token" , token)
            res.redirect("/profile")
        }
        else{
            res.send("Email or Password is Wrong")
        }
    })
    
})

app.post("/post",loggedIn , async (req,res) =>{
    const {content} = req.body
    const user = await userModel.findOne({email : req.user.email})
    const post = postModel({
        content,
        user : user._id
    })
    await post.save()
    user.posts.push(post._id)
    await user.save()


    res.redirect("/profile")

})

app.get("/like/:id" , loggedIn , async (req,res)=>{
    const user = await userModel.findOne({email : req.user.email})
    const post = await postModel.findOne({
        _id : req.params.id
    }).populate("user")
    
    if(post.likes.indexOf(user._id) === -1){
        post.likes.push(user._id)
    }
    else{
        post.likes.splice(post.likes.indexOf(user._id) , 1)
    }
    await post.save()
    
    res.redirect("/profile")
})


app.get("/edit/:id" , loggedIn , async (req,res)=>{
    const user = await userModel.findOne({email : req.user.email})
    const post = await postModel.findOne({_id : req.params.id})
    
    
    res.render("edit" , {user , post})
})

app.post("/edit/:id" , loggedIn , async (req,res)=>{
    const {content} = req.body
    
    const post = await postModel.findOneAndUpdate({_id : req.params.id}, {content : content})
    res.redirect("/profile")
})





app.listen(3000)