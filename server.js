const dbURI = require("process").env.MONGODB_CONNECTION
const cookieParser = require("cookie-parser")
const student = require('./routes/student')
const admin = require('./routes/admin')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 5000

// App config middleware
app.set('view engine', 'ejs')
app.set('views', '.')
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/admin/publi'))
app.use(express.static(__dirname + '/student/public'))

// Connecting to Db
mongoose.connect(dbURI)
.then((res)=>{
	app.listen(port, ()=>console.log("Server started"))})
.catch((err)=>console.log(err))

// Root
app.get('/', (req, res)=>{
	res.setHeader("Set-Cookie", "whoami=I am programmer");
    res.sendFile('index.html', {root: __dirname})
})

//Admin
app.use('/admin', admin)

//Student
app.use('/student', student)

// No path found
app.use((req, res)=>{
    res.status(404).sendFile('404.html', {root: __dirname})
})
