'use strict';
let url = require('url');
/*
 * url.format( urlObj )
 * url地址格式化
 * @param {urlObj} 包含url各个属性的 obj 对象 
 */
let formUrl1 =  url.format({
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com:80',
  port: '80',
  hostname: 'github.com',
  hash: '#part1',
  search: '?name=neoyoun&age=25',
  query: 'name=neoyoun&age=25',
  pathname: '/neoyoun/nodejs-learning',
  path: '/neoyoun/nodejs-learning?name=neoyoun&age=25',
  href: 'https://github.com:80/neoyoun/nodejs-learning?name=neoyoun&age=25#part1' }
)
let formUrl2 = url.format({
  protocol: 'https',
  host: 'github.com:80',
  hash: 'part1',
  search: '?name=neoyoun&age=25',
  pathname: '/neoyoun/nodejs-learning',
})
/*  
 * {href} 会被忽略，{path} 也会被忽略
 * {protocol} 协议的设置
 *  常见协议 比如 http, https, ftp, gopher, file 会被统一加上 :// 的后缀
 *  其他协议 比如 protocols mailto, xmpp, aim, sftp, foo 后缀只有 : 没有 //(双斜线) 
 * {slashes} boolean 双斜线的设置
 *    slashes 设置为 true 时会影响 protocol 的展示，会被强制加上 :// (即使是 protocols mailto, xmpp, aim, sftp, foo)
 *  只有当 protocol 没有预先定义应该被怎么处理后缀才设置 slashes 的值.(会被加上 :// 比如host->host:// )
 *  只有当 {host} 没有设置的时候 {hostname} 和 {port} 才会被用上
 *  {host} 会替换掉 {hostname}:{port}
 *  当 {search} 没有设置时，才会用上 {query} 的值，如果有 {search} 会替代 {query}
 *  {hash} 会被预处理 不管加不加 # 前缀
 */
console.log('format1->',formUrl1);
console.log('format2->',formUrl2);
console.log( formUrl1 == formUrl2 ); //true
