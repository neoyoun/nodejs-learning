'use strict';
let EventEmitter = require('events').EventEmitter;
let life = new EventEmitter();

life.setMaxListeners(11);
function joke(who) {
	console.log('给 '+who+' 讲个笑话')
}
life
.on('求安慰' , joke)
.on('求安慰' , function (who) {
	console.log('给 '+who+' 么么哒')
})
.on('求安慰' , function (who) {
	console.log('给 '+who+' 锤个肩')
})
.on('求安慰' , function (who) {
	console.log('给 '+who+' 。。。4')
})
.on('求安慰' , function (who) {
	console.log('给 '+who+' .。。5')
})
.on('求安慰' , function (who) {
	console.log('给 '+who+' .。。6')
})
.on('求安慰' , function (who) {
	console.log('给 '+who+' .。。。7')
})

life.on('求溺爱' , function (who) {
	console.log('给 '+who+' 买包包')
}).on('求溺爱' , function (who) {
	console.log('给 '+ who +' 揉揉头');
})

life.removeListener('求安慰' , joke)
life.removeAllListeners('求安慰') //移除某个事件的所有监听函数


//返回布尔值
let hasComfortListener = life.emit('求安慰' , '大爷');
let hasLoveListener = life.emit('求溺爱' , '小璟');

console.log(life.listeners('求安慰').length)
console.log(life.listeners('求溺爱').length)
//console.log(EventEmitter.listenerCount(life,'求安慰'))