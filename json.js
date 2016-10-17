'use strict';
let querystring = require('querystring');
let message = querystring.stringify({
	"mobile":"18664623403",
	"content":"这是通过nodeJS发布的一条消息hahahahah",
	"type":10
})
let data = {};
data.newmessage = message;
console.log(querystring.stringify(data));
/*let str = 'newmessage=mobile%3D18664623403%26content%3D%25E8%25BF%2599%25E6%2598%25AF%25E9%2580%259A%25E8%25BF%2587nodeJS%25E5%258F%2591%25E5%25B8%2583%25E7%259A%2584%25E4%25B8%2580%25E6%259D%25A1%25E6%25B6%2588%25E6%2581%25AFhahahahah%26type%3D10';
console.info(querystring.parse(str));*/