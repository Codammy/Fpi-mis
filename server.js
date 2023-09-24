const express = require('express')
const ejs = require('ejs')
const admin = require('./routes/admin')
const student = require('./routes/student')
const port = 5000
const app = express()

// App config
app.set('view engine', 'ejs')
app.set('views', '.')
app.use(express.static(__dirname + '/student/public'))
app.use(express.static(__dirname + '/admin/publi'))

// Root
app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})

//Admin
app.use(admin)

//Student
app.use(student)

// No path found
app.use((req, res)=>{
    res.status(404).sendFile('404.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})

app.listen(port, ()=>{console.log("Server started... ")})