'use strict';
const Config = {
	port: 2016,
}
let express = require('express');
let app = express();

app.get('/',function (req , res) {
	res.send('Hello NodeJs')
})

app.listen(Config.port)
console.log(`http server is running in localhost:${Config.port}`);