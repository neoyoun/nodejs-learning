//事件回调
'use strict';
let http = require('http');
function learning(something) {
	console.log(something);
}

function we(callback , something) {
	something += ' is cool';
	callback(something);
}

we(learning , 'nodejs');
we( function (hahah) {
	console.log(hahah)
} , 'Jade');