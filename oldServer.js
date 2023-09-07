const http = require('http')
const fs = require('fs')
console.log(__filename)
function backend(req, res) {
	res.writeHead(200, { 'Content-type': 'text/html' })

	let path = '.';
	switch (req.url) {
		case '/admin-login':
			path += '/Admin/login.html'
			break;
		case '/student-login':
			path += '/Student/login.html'
			break;
		case '/admin':
			path += '/Admin/admin.html'
			break;
		case '/student':
			path += 'Student/student.html'
			break;
		case '/login':
			res.writeHead(301, {'Location': '/student-login'})// REDIRECT NOT FUNCTIONAL
			res.statusCode = 301
			res.end()
			break;
		default:
			if (req.url == '/')
				path += '/index.html'
			else
				path += req.url;
			break;
	}
	fs.readFile(path, (err, data) => {
		if (err)
		{
			console.log("wrong file path or file doesn't. exist " + path);
			res.write(`<h1>${req.url}<br />404 PAGE NOT FOUND</h1>`)
			res.statusCode = 404
			res.end()
		}
		else {
			res.write(data)
			console.log('requested ' + req.url);
		}
		console.log(res.statusCode)
		res.end()
	})
}
const server = http.createServer(backend)
server.listen(3000, 'localhost', () => console.log("Server started... "))
