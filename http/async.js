//异步编程
//常见 setTimeout 和 setInterval
'use strict';
let a = 5;
function print (num) {
	console.log(num)
}

function plus (num,callback) {
	setTimeout(function () {
		console.log(num)
		num--;
		callback(num)
	}, 1000)
}
plus(a,print);
