const fs = require('fs')
const express = require('express')
const studentRoute = express.Router()
const memo = require('../models/memo')
const student = require('../models/student')
const complain = require('../models/complain')

// Student get requests
studentRoute.get('/login', (req, res)=>{    
    res.render('student/views/login', {page: {title: '', style: '/stylesheets/login.css'}})
})
studentRoute.get('/messages', (req, res)=>{
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('student/views/messages', {data: JSON.parse(data.toString()), page: {title: ' | Messages', style: '/stylesheets/msg.css'}})
        }
    })
})
studentRoute.get('/dashboard', (req, res)=>{
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
studentRoute.get('/', (req, res)=>{
    res.redirect('/student/login')
})

// handling post request
studentRoute.post('/login', (req, res)=>{res.render('student/views/dashboard')})

studentRoute.post('/complain', async (req, res)=>{
	console.log(req.body)
	const result = await complain.create(req.body)
	res.redirect('/student/dashboard')
})

module.exports = studentRoute
