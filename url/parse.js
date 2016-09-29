'use strict';
/*
 * url.parese( urlStr[,parseQueryString=false][,slashesDenoteHost=false])
 * url地址解析
 * @param string {urlStr} 目标 URL 地址
 *		  bollean {parseQueryString} 是否解析 query(查询字符串) 为对象，默认false
 *		  boolean {slashesDenoteHost} 底层协议是否可以省略，默认false
 */
let url = require('url');
let tartgetURL = 'https://github.com:80/neoyoun/nodejs-learning?name=neoyoun&age=25#part1';
console.log("url.parse('https://github.com:80/neoyoun/nodejs-learning?name=neoyoun&age=25#part1')")
console.log( url.parse(tartgetURL) ); 
/*
*  protocol: 'https:',  //底层使用的协议
*  slashes: true, 		//是否有协议的斜线
*  auth: null,			//url授权
*  host: 'github.com:80',	//域名
*  port: 80,				//端口
*  hostname: 'github.com',  //主机名		
*  hash: '#part1',			//哈希值 对应锚链
*  search: '?name=neoyoun&age=25',  //查询
*  query: 'name=neoyoun&age=25',    //查询的键值对
*  pathname: '/neoyoun/nodejs-learning', //访问资源路径名
*  path: '/neoyoun/nodejs-learning',	 //访问路径
*  href: 'https://github.com:80/neoyoun/nodejs-learning?name=neoyoun&age=25#part1'' }
*/
console.log('url.parse("//github.com/neoyoun?age=25&height=176",true,true)');
console.log(url.parse('//github.com/neoyoun?age=25&height=176',true,true))
/* protocol: null,       //无协议也可解析
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: '?age=25&height=176',
  query: { age: '25', height: '176' }, //被解析成对象
  pathname: '/neoyoun',
  path: '/neoyoun?age=25&height=176',
  href: '//github.com/neoyoun?age=25&height=176'
*/
