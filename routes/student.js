const fs = require('fs')
const express = require('express')
const student = express.Router()

// Student route
student.get('/student/login', (req, res)=>{    
    res.render('student/views/login', {page: {title: '', style: '/stylesheets/login.css'}})
})
student.get('/student/messages', (req, res)=>{
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('student/views/messages', {data: JSON.parse(data.toString()), page: {title: ' | Messages', style: '/stylesheets/msg.css'}})
        }
    })
})
student.get('/student/dashboard', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    fs.readFile('./local-db/students.json', (err, data)=>{
        if (err)
            console.log(err)
        else   
        {
            fs.readFile('./local-db/posts.json', (err, posts)=>{
                const student = JSON.parse(data.toString())
                const ran = Math.floor(Math.random() * 5)
                res.render('student/views/dashboard', { user: student[ran], notifications: JSON.parse(posts.toString()), page: {title: ' | Dashboard', style: '/stylesheets/student.css'}})
            })
        }
    })
})
student.get('/login', (req, res)=>{
    res.redirect('/student/login')
})
module.exports = student