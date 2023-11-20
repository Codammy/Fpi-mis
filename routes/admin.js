const fs = require('fs')
const express = require('express')
const adminRoute = express.Router()
const multer = require('multer')
const complain = require('../models/complain')
const memo = require('../models/memo')
const student = require('../models/student')
const Admin = require('../models/admin')

//Configuring file upload
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Admin get routes
adminRoute.get('/login', (req, res) => {
    res.render('admin/views/login', { page: { title: '', style: '/stylesheet/login.css' } })
})
adminRoute.get('/history', async (req, res) => {
    const history = await memo.find().sort({ createdAt: -1 })
    res.render('admin/views/history', { history, page: { title: ' | History', style: '' } })
})
adminRoute.get('/create-new', (req, res) => {
    res.render('admin/views/create-new', { page: { title: ' | create-new', style: '/stylesheet/new.css' } })
})
adminRoute.get('/complaint-box', async (req, res) => {
    const complaints = await complain.find().sort({ createdAt: -1 })
	console.log(complaints.date)
    res.render('admin/views/inbox', { complaint: complaints, page: { title: ' | Complaint-box', style: '/stylesheet/inbox.css' } })
})
adminRoute.get('/home', (req, res) => {
    res.render('admin/views/admin', { page: { title: '| Home', style: '/stylesheet/admin.css' } })
})
adminRoute.get('/archive', async (req, res) => {
    const posts = await memo.find()
	console.log(posts.date)
    res.render('admin/views/archive', { data: posts, page: { title: ' | Archive', style: '/stylesheet/arc.css' } })
})

adminRoute.get('/new', (req, res) => {
    res.render('admin/views/write', { page: { title: '| writing', style: '/stylesheet/new.css' } })
})
// Redirect
adminRoute.get('/', (req, res) => {
    res.redirect('/admin/login')
})

// Handle post request
adminRoute.post('/login', async (req, res) => {
	try{
	const loginUser =  await Admin.findOne({id_no: req.body.user_name})
		if (req.body.password !== loginUser.password)
		{
			res.send("<h2 style='font-family: monospace; margin: 15px; color: red'>Incorrect login details</h2>")
		}
		res.redirect('/admin/home')
		console.log(loginUser)
	}
	catch (err){
		console.log(err)
	}
})

adminRoute.post('/new', (req, res) => {
    if (req.body.title) {
        const newMessage = new memo(req.body)
        newMessage.save()
            .then(() => res.redirect('/admin/home'))
            .catch((err) => console.log(err))
    }
})

adminRoute.post('/newfile', upload.single('file'), (req, res) => {
    const { originalname, mimetype, buffer, fieldname, encoding} = req.file
    const newfile = new memo({
        fieldname,
        filename: originalname,
        encoding,
        mimetype,
        data: buffer
    })
    newfile.save().then(() => {
        res.redirect('/admin/home')
    }).catch(err => {
        console.log(err)
        res.json({ message: "File upload failed" })
    })
})

adminRoute.delete('/archive', (req, res) => { })
adminRoute.get('/add-student', async (req, res) => {
    const response = await student.create({
        name: "Salau hamed tofunmi",
        matric_no: "N/SLT/4939"
    })
    res.send('Student added')
})

module.exports = adminRoute
