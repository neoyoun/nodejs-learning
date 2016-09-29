/*
 * 第二个参数以非 / 开头时，第一个参数以 / 结束时，后面会拼接，以 非/ 结束时，会被替换
 * 第二个参数以 / 开头时，会替换成第一个参数的 path值，无论第一个参数带不带 /
 */
url.resolve('/one/two/three','/four')		  // '/four'
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('/one/two/three/', 'four')         // '/one/two/three/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one/three/', '/two') // 'http://example.com/two'