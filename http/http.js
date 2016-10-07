'use strict';
let http = require('http');
let port = 2016;
http
	.createServer(function (req,res) {
		res.writeHead(200,{'Content-type':'text/plain'})
		res.write('Hello nodeJs')
		res.end()
	})
	.listen(port)
	console.log(`http-server is running in localhost:${port}`);