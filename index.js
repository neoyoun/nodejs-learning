'use strict';
let express= require('express');
let app = express();
const Port = 2016;
app.use(express.static('test'));

app.get('/',function (req,res) {
	res.send('Hello express');
})
app.listen(Port);
console.log(`express is listening in localhost:${Port}`);