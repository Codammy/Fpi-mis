const http = require('http')
const fs = require('fs')
function backend(req, res) {
	res.writeHead(200, { 'Content-type': 'text/html' })

	// const path = '.' + req.url;
	// fs.readFile(path, (err, data)=>{
	// 	if (err)
	// 		console.log("wrong file path or file doesn't. " + path);
	// 	else
	// 		{
	// 			res.write(data)
	// 			console.log('requested ' + req.url);
	// 		}
	// 		res.end()
	// })
	const path = req.url;
	switch (path) {
		case '/':
			fs.readFile('./index.html', (err, data) => {
				if (err)
					console.log("wrong file path or file doesn't. exist" + path);
				else {
					res.write(data)
					console.log('requested ' + req.url);
				}
				res.end()
			})
			break;
		case '/admin-login':
			fs.readFile('admin/login.html', (err, data) => {
				if (err)
					console.log("wrong file path or file doesn't. exist " + path);
				else {
					res.write(data)
					console.log('requested ' + req.url);
				}
				res.end()
			})
			break;
		case '/student-login':
			fs.readFile('student/login.html', (err, data) => {
				if (err)
					console.log("wrong file path or file doesn't. exist " + path);
				else {
					res.write(data)
					console.log('requested ' + req.url);
				}
				res.end()
			})
			break;
		case '/admin':
			fs.readFile('admin/admin.html', (err, data) => {
				if (err)
					console.log("wrong file path or file doesn't. exist " + path);
				else {
					res.write(data)
					console.log('requested ' + req.url);
				}
				res.end()
			})
			break;
		case '/student':
			fs.readFile('student/student.html', (err, data) => {
				if (err)
					console.log("wrong file path or file doesn't. exist " + path);
				else {
					res.write(data)
					console.log('requested ' + req.url);
				}
				res.end()
			})
			break;
		case 'login':
			res.setHeader({'Location': '/student-login'})// REDIRECT NOT FUNCTIONAL
			break;
		default:
			res.write(`<h1>${path}<br />404 PAGE NOT FOUND</h1>`)
			res.end()
			break;
	}
}
const server = http.createServer(backend)
server.listen(3000, 'localhost', () => console.log("Server started... "))