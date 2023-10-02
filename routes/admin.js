const fs = require('fs')
const express = require('express')
const adminRoute = express.Router()
const complain = require('../models/complain')
const memo = require('../models/memo')
const student = require('../models/student')
const Admin = require('../models/admin')

// Admin get routes
adminRoute.get('/login', (req, res)=>{
    res.render('admin/views/login', {page: {title: '', style: '/stylesheet/login.css'}})
})
adminRoute.get('/history', (req, res)=>{
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('admin/views/history', {data: JSON.parse(data.toString()), page: {title: ' | History', style: ''}})
        }
    })
})
adminRoute.get('/create-new', (req, res)=>{
    res.render('admin/views/create-new', {page: {title: ' | create-new', style: '/stylesheet/new.css'}})
})
adminRoute.get('/complaint-box', async (req, res)=>{
    const complaints = await complain.find()
    console.log(complaints)
    res.render('admin/views/inbox', {complains: complaints, page: {title: ' | Complaint-box', style: '/stylesheet/inbox.css'}})
})
adminRoute.get('/home', (req, res)=>{
    res.render('admin/views/admin', {page: {title: '| Home', style: '/stylesheet/admin.css'}})
})
adminRoute.get('/archive', (req, res)=>{
    fs.readFile('./local-db/admins.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('admin/views/archive', {data: JSON.parse(data.toString()), page: {title: ' | Archive', style: '/stylesheet/arc.css'}})
        }
    })
})

adminRoute.get('/new', (req, res)=>{
    res.render('admin/views/write', {page: {title: '| writing', style: '/stylesheet/new.css'}})
})
// Redirect
adminRoute.get('/', (req, res)=>{
	res.redirect('/login')
})

// Handle post request
adminRoute.post('/login', (req, res)=>{res.redirect('/admin/home')
})

adminRoute.post('/new', (req, res)=>{
	console.log(req.body)
	if (req.body.title)
		req.body.type = 'txt'
	console.log(req.body)
	const newMessage = new memo(req.body)
	newMessage.save()
	.then(()=> res.redirect('/admin/home'))
	.catch((err)=> console.log(err))
})
adminRoute.delete('/archive', (req, res)=>{})
adminRoute.get('/add-student', async (req, res)=>{
	const response = await student.create({
		name: "Salau hamed tofunmi",
		matric_no: "N/SLT/4939"
	})
	res.send('Student added')
})

module.exports = adminRoute
