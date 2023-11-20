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
       const posts = await memo.find().sort({createdAt: -1})
        res.render('student/views/messages', {data: posts, page: {title: ' | Messages', style: '/stylesheets/msg.css'}})
})
studentRoute.get('/messages/:id', async (req, res)=>{
	const target = req.params.id
       const msg = await memo.findById(target)
	res.setHeader('Content-Type', msg.mimetype)
        res.send(msg.data)
})
studentRoute.get('/dashboard', async (req, res)=>{
	const su = await student.findOne()
        const posts = await memo.find().sort({})
        res.render('student/views/dashboard', { user: su, notifications: posts, page: {title: ' | Dashboard', style: '/stylesheets/student.css'}})
})
studentRoute.get('/', (req, res)=>{
    res.redirect('/student/login')
})

// handling post request
studentRoute.post('/login', async (req, res)=>{
	const {user, pass} = {...req.body}
	try{
	const loginUser =  await student.findOne({matric_no: user})
		console.log(loginUser)
		if (!loginUser || pass !== loginUser.password)
		{
			res.send("<h2 style='font-family: monospace; margin: 15px; color: red'>Incorrect login details</h2>")
		}
    		res.redirect('/student/dashboard')
	}
	catch (err){
		console.log(err)
	}
})
studentRoute.post('/complain', async (req, res)=>{
	const result = await complain.create(req.body)
	res.redirect('/student/dashboard')
})

module.exports = studentRoute
