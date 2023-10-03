const express = require('express')
const ejs = require('ejs')
const admin = require('./routes/admin')
const student = require('./routes/student')
const dbURI = require("process").env.MONGODB_CONNECTION
const mongoose = require('mongoose')
const port = 5000
const app = express()

// App config middleware
app.set('view engine', 'ejs')
app.set('views', '.')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/student/public'))
app.use(express.static(__dirname + '/admin/publi'))

// Connecting to Db
mongoose.connect(dbURI)
.then((res)=>{
	app.listen(port, ()=>console.log("Server started"))})
.catch((err)=>console.log(err))

// Root
app.get('/', (req, res)=>{
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
