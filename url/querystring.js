'use strict';
const querystring = require('querystring');
/*
 *需要安装 querystring 模块 npm i -g querystring
 * escape html 编码
 * unescapeBuffer , 转成二进制
 * unescape html 反编码
 * 
 */
 let str = '<哈哈哈>';
 let escapeStr = querystring.escape(str);  
 // '%3C%E5%93%88%E5%93%88%E5%93%88%3E'
 let unescapeBufferStr = querystring.unescapeBuffer(escapeStr); 
 // <Buffer 3c e5 93 88 e5 93 88 e5 93 88 3e>
 let unescapeStr = querystring.unescape(escapeStr); //'<哈哈哈>'

 /* 序列化 和 反序列化
  * querystring.stringify( obj [,键值对间连接符='&'],[,参数和值的连接符='=']) 
  *
  * querystring.parse(str[,键值对间连接符='&'][,参数和值的连接符='='][,参数个数])
  * 如果可选参数设置错误，会无法正确反序列化。
  */
 let obj = {
 	name: 'neoyoun',
 	height: 176,
 	learn: ['nodejs','redux'],
 	time: 10
 }
 querystring.stringify( obj ); // name=neoyoun&height=176&learn=nodejs&learn=redux&time=10
 querystring.stringify( obj ,',',':'); //name:neoyoun,height:176,learn:nodejs,learn:redux,time:10

 querystring.parse('name=neoyoun&height=176&learn=nodejs&learn=redux&time=10');
 /*
  { name: 'neoyoun',
  height: '176',
  learn: [ 'nodejs', 'redux' ],
  time: '10' }
*/
querystring.parse('name:neoyoun,height:176,learn:nodejs,learn:redux,time:10');
/* 两个可选参数都错误，会将字符串解释为一个参数
{ 'name:neoyoun,height:176,learn:nodejs,learn:redux,time:10': '' }
*/
querystring.parse('name:neoyoun,height:176,learn:nodejs,learn:redux,time:10','&',':');
/*
 * 键值对间参数错误，属性与值之间的参数设置正确
  { name: 'neoyoun,height:176,learn:nodejs,learn:redux,time:10' }
*/
querystring.parse('name:neoyoun,height:176,learn:nodejs,learn:redux,time:10',',');
/*
* 键值对间参数正确，分割后再对 键值对反序列化
 { 'name:neoyoun': '',
  'height:176': '',
  'learn:nodejs': '',
  'learn:redux': '',
  'time:10': '' }

*/
querystring.parse('name:neoyoun,height:176,learn:nodejs,learn:redux,time:10',',',':');
/*
 * 正确解析
 { name: 'neoyoun',
  height: '176',
  learn: [ 'nodejs', 'redux' ],
  time: '10' }
 */
 console.log(querystring.parse('name:neoyoun,height:176,learn:nodejs,learn:redux,time:10',',',':'))