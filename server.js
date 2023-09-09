const express = require('express')
const ejs = require('ejs')
const port = 5000
const app = express()

// App config
app.set('view engine', 'ejs')
app.set('views', '.')
app.use(express.static(__dirname + '/Student/public'))
app.use(express.static(__dirname + '/Admin/publi'))

// Home
app.get('/', (req, res)=>{
    res.render('index', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})

// Admin route
app.get('/admin', (req, res)=>{
    res.render('Admin/views/login', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})
app.get('/history', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Admin/views/history', {root: __dirname})
})
app.get('/home', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Admin/views/admin', {root: __dirname})
})
app.get('/archive', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Admin/views/archive', {root: __dirname})
})

// Student route
app.get('/student', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Student/views/login', {root: __dirname})
})
app.get('/messages', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Student/views/messages', {root: __dirname})
})
app.get('/dashboard', (req, res)=>{
    console.log(req.url, req.method, res.statusCode) 
    const student = require('./user')
    console.log(student)
    res.render('Student/views/dashboard', { user: student.user })
})
app.get('/login', (req, res)=>{
    res.redirect('/student')
    console.log(req.url, req.method, res.statusCode)
})

// No path found
app.use((req, res)=>{
    res.status(404).sendFile('404.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})
app.listen(port, ()=>{console.log("Server started... ")})
