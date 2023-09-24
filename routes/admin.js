const fs = require('fs')
const express = require('express')
const admin = express.Router()

// Admin route
admin.get('/admin', (req, res)=>{
    res.render('admin/views/login', {page: {title: '', style: '/stylesheet/login.css'}})
    console.log(req.url, req.method, res.statusCode)
})
admin.get('/admin/history', (req, res)=>{
    fs.readFile('./local-db/posts.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('admin/views/history', {data: JSON.parse(data.toString()), page: {title: ' | History', style: ''}})
        }
    })
})
admin.get('/admin/create-new', (req, res)=>{
    res.render('admin/views/create-new', {page: {title: ' | create-new', style: '/stylesheet/new.css'}})
})
admin.get('/admin/complaint-box', (req, res)=>{
    res.render('admin/views/inbox', {page: {title: ' | Complaint-box', style: '/stylesheet/inbox.css'}})
})
admin.get('/admin/home', (req, res)=>{
    console.log(req.url, req.method, res.statusCode)
    res.render('admin/views/admin', {page: {title: '| Home', style: '/stylesheet/admin.css'}})
})
admin.get('/admin/archive', (req, res)=>{
    fs.readFile('./local-db/admins.json', (err, data)=>{
        if (err)
            console.log(err)
        else
        {
            res.render('admin/views/archive', {data: JSON.parse(data.toString()), page: {title: ' | Archive', style: '/stylesheet/arc.css'}})
        }
    })
})
module.exports = admin