const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const { json } = require('express/lib/response')
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
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('Admin/views/history', {data: JSON.parse(data.toString())})
        }
    })
})
app.get('/create-new', (req, res)=>{
    res.render('Admin/views/create-new', {root: __dirname})
})
app.get('/home', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('Admin/views/admin', {root: __dirname})
})
app.get('/archive', (req, res)=>{
    fs.readFile('./local-db/admins.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('Admin/views/archive', {data: JSON.parse(data.toString())})
        }
    })
})

// Student route
app.get('/student', (req, res)=>{    
    res.render('Student/views/login', {root: __dirname})
})
app.get('/messages', (req, res)=>{
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('Student/views/messages', {data: JSON.parse(data.toString())})
        }
    })
})
app.get('/dashboard', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    fs.readFile('./local-db/students.json', (err, data)=>{
        if (err)
            console.log(err)
        else   
        {
            fs.readFile('./local-db/posts.json', (err, posts)=>{
                const student = JSON.parse(data.toString())
                const ran = Math.floor(Math.random() * 5)
                res.render('Student/views/dashboard', { user: student[ran], notifications: JSON.parse(posts.toString()) })
            })
        }
    })
})
app.get('/login', (req, res)=>{
    res.redirect('/student')
})

// No path found
app.use((req, res)=>{
    res.status(404).sendFile('404.html', {root: __dirname})
    console.log(req.url, req.method, res.statusCode)
})

app.listen(port, ()=>{console.log("Server started... ")})