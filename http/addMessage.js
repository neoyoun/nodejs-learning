'use strict';
let http = require('http');
let querystring = require('querystring');
let request = require('request');
/*let postData = querystring.stringify({
	"mobile":"18664623403",
	"content":"这是通过nodeJS发布的一条消息hahahahah",
	"type":10
})*/
let postData = {
	"mobile":"18664623402",
	"content":"来嘛 让我跨域玩一下..",
	"type":10
}

let options = {
	host:'xaljbbs.com',
	path:'/dist/services/insertData.php',
	port:80,
	method:'POST',
	headers:{
'Accept':'*/*',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundarysW0JUi5Wqu2GERnr',
'Cookie':'___rl__test__cookies=1476382970377; ___rl__test__cookies=1474218218069; PHPSESSID=p2bt4fdkovnsn6fbp55jvsk0g4; OUTFOX_SEARCH_USER_ID_NCOO=1480986402.0059752; usermobile=18664623403',
'Host':'xaljbbs.com',
'Origin':'http://xaljbbs.com',
'Referer':'http://xaljbbs.com/dist/',
'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36'}
}

/*let req = http.request(options,function (res,body) {
	console.log(`Status:${res.statusCode}`);
	console.log(`headers:${JSON.stringify(res.headers)}`);
	
	res.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
		console.log(chunk);
	})
	res.on('end',function () {
		console.log('添加信息成功')
	})
})
	req.on('error',function (err) {
		console.log(`Error:${err.message}`)
	})
	req.write(postData)
	req.end()*/
let formData = {
	newmessage : JSON.stringify(postData)
}
request.post({url:'http://xaljbbs.com/dist/services/insertData.php', formData:formData},function (err,response,body) {
	if(err){
		return console.log('出错了',err)
	}else{
		if(response.statusCode==200){
			console.log('成功啦')
		}else{
			console.log('返回状态码:',response.statusCode)
		}
		console.log(body);
	}
})
/*function callback(error,response,body) {
	console.log(response);
	//console.log(response.statusCode);
	console.log(body);
	if(error){
		console.log('出错了哦。。。。')
	}
}

request(options , callback);*/