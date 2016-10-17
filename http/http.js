'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');
let port = 2016;
http
	.createServer(function (req,res) {
		res.writeHead(200,{'Content-type':'text/plain'})
		res.write('Hello nodeJs')
		if(req.url !== '/favicon.ico'){
			let pathname = url.parse(req.url).pathname;
			console.log(`current request url is ${req.url}`);
		}
		res.end()
	})
	.listen(port)
	console.log(`http-server is running in localhost:${port}`);

