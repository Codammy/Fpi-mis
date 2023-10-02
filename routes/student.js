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
studentRoute.get('/messages', async (req, res)=>{
       const posts = await memo.find()
        res.render('student/views/messages', {data: posts, page: {title: ' | Messages', style: '/stylesheets/msg.css'}})
})
studentRoute.get('/dashboard', async (req, res)=>{
        const su = await student.findOne()
        const posts = await memo.find()
        console.log(su);
        res.render('student/views/dashboard', { user: su, notifications: posts, page: {title: ' | Dashboard', style: '/stylesheets/student.css'}})
})
studentRoute.get('/', (req, res)=>{
    res.redirect('/student/login')
})

// handling post request
studentRoute.post('/login', async (req, res)=>{
    const su = await student.findOne()
    const posts = await memo.find()
    res.render('student/views/dashboard', { user: su, notifications: posts, page: {title: ' | Dashboard', style: '/stylesheets/student.css'}})
})

studentRoute.post('/complain', async (req, res)=>{
	const result = await complain.create(req.body)
	res.redirect('/student/dashboard')
})

module.exports = studentRoute
