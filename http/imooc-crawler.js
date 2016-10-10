'use strict';
let http = require('http');
let cheerio = require('cheerio');
let fs = require('fs');
let url  = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
	let chaptersInfo = [];
	let $ = cheerio.load(html);
	let chapters = $('.chapter');
	chapters.each(function (item) {
		let chapter = $(this);
		let title = chapter.find('h3 strong .icon-chapter')[0].nextSibling.nodeValue.trim();
		//console.log(title);
		let desc = chapter.find('h3 strong .chapter-content').text();
		let childChapters = chapter.find('li');
		let childChaptersInfo=[];
		childChapters.each(function (item) {
			let childChaper = $(this);
			let index= childChaper.find('a').attr('href').replace(/\/video\//,'');
			let titleInfo = childChaper.find('a .icon-video')[0].nextSibling.nodeValue;
			let title = titleInfo.split('(')[0].trim();
			let time = titleInfo.split('(')[1].split(')')[0];
			let childChasperInfo = {index:index,title:title,time:time};
			childChaptersInfo.push(childChasperInfo);
		})
		let chapterInfo = {title:title,desc:desc,childChapters:childChaptersInfo};
		//console.log(chapterInfo);
		chaptersInfo.push(chapterInfo);
	})
	return JSON.stringify(chaptersInfo);
}
http
	.get(url , function (res) {
		let html = '';
	//	res.setHeader('content-type','text/html;charset=utf-8');
		res.on('data' , function (data) {
			html += data
		})
		res.on('end' , function () {
			console.log(filterChapters(html));
			let index = url.split('/')[url.split('/').length-1];
			fs.writeFile(`imooc-${index}.json`,filterChapters(html));
		})
	})
	.on('error' , function () {
		console.log('error')
	})