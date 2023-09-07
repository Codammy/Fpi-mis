const express = require('express')
const ejs = require('ejs')
const port = 5000
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname))
app.get('/', (req, res)=>{
    res.sendFile('index', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})
app.get('/admin', (req, res)=>{
    res.sendFile('Admin/login.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})
app.get('/student', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.sendFile('Student/login.html', {root: __dirname})
})
app.get('/login', (req, res)=>{
    res.redirect('/student')
    console.log(req.url, req.method, res.statusCode)
})
app.use((req, res)=>{
    res.status(404).sendFile('404.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})
app.listen(port, ()=>{console.log("Server started")})
