'use strict';
let https = require('https');
let fs = require('fs');
let cheerio = require('cheerio');
let express = require('express');
let app = express();
let url = 'https://segmentfault.com/q/1010000005704139';

function filterSongList(html) {
	let $ = cheerio.load(html);
	let answers = $('.widget-answers article');
	let listFormat = [];
	answers.each(function (item,idx) {
		let answer = $(this);
		let content = answer.find('.answer').text();
		let answerInfo = {index:idx,content:content};
		listFormat.push(answerInfo);
	})
	return listFormat;
}

https
.get(url, function (res) {
	let html = '';
	res.on('data' , function (data) {
		html += data
	})
	res.on('end' , function () {
		//console.log(html);
		fs.writeFile('answers.html',html)
		filterSongList('answers.html')
	})
})
.on('error' , function () {
	console.log('error')
})
