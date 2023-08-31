 http = require('http');
fs = require('fs')
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'})
console.log('request sent')
	fs.readFile('index.html', (err, buff)=>{
	if (err)
		console.log('file does\'nt exist')
	res.write('<head><link rel="stylesheet" href="style1.css"></head>')
	res.write(buff)
	console.log(req.url, req.method)
	res.end()
	})
}).listen(8080, 'localhost', ()=>console.log('server started at port 8080 and awaiting request'))
