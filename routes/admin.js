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
    console.log(history);
    res.render('admin/views/history', { history, page: { title: ' | History', style: '' } })
})
adminRoute.get('/create-new', (req, res) => {
    res.render('admin/views/create-new', { page: { title: ' | create-new', style: '/stylesheet/new.css' } })
})
adminRoute.get('/complaint-box', async (req, res) => {
    const complaints = await complain.find().sort({ createdAt: -1 })
    console.log(complaints, complaints.student_id)
    res.render('admin/views/inbox', { complaint: complaints, page: { title: ' | Complaint-box', style: '/stylesheet/inbox.css' } })
})
adminRoute.get('/home', (req, res) => {
    res.render('admin/views/admin', { page: { title: '| Home', style: '/stylesheet/admin.css' } })
})
adminRoute.get('/archive', (req, res) => {
    fs.readFile('./local-db/admins.json', (err, data) => {
        if (err)
            console.log(err)
        else {
            res.render('admin/views/archive', { data: JSON.parse(data.toString()), page: { title: ' | Archive', style: '/stylesheet/arc.css' } })
        }
    })
})

adminRoute.get('/new', (req, res) => {
    res.render('admin/views/write', { page: { title: '| writing', style: '/stylesheet/new.css' } })
})
// Redirect
adminRoute.get('/', (req, res) => {
    res.redirect('/admin/login')
})

// Handle post request
adminRoute.post('/login', (req, res) => {
    res.redirect('/admin/home')
})

adminRoute.post('/new', (req, res) => {
    if (req.body.title) {
        req.body.type = 'txt'
        const newMessage = new memo(req.body)
        newMessage.save()
            .then(() => res.redirect('/admin/home'))
            .catch((err) => console.log(err))
    }
})

adminRoute.post('/newfile', upload.single('file'), (req, res) => {
    console.log(req.file);
    const { originalname, mimetype, buffer} = req.file
    const newfile = new memo({
        filename: originalname,
        mimetype: mimetype,
        data: buffer
    })
    newfile.save().then(() => {
        console.log(newfile);
        res.json({ message: "File upload sucessfully" })
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
