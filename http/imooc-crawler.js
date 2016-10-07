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
		let title = chapter.find('h3 strong .icon-chapter').next().text();
		let desc = chapter.find('.chapter-content').text();
		let childChapters = chapter.find('li');
		let childChaptersInfo=[];
		childChapters.each(function (item) {
			let childChaper = $(this);
			let index= childChaper.find('a').attr('href').replace('/\/video\//','');
			let title = childChaper.find('a').text();
			let childChasperInfo = {index:index,title:title};
			childChaptersInfo.push(childChasperInfo);
		})
		let chapterInfo = {title:title,desc:desc,childChapters:childChaptersInfo};
		chaptersInfo.push(chapterInfo);
	})
	return chaptersInfo;
}
http
	.get(url , function (res) {
		let html = '';
		res.on('data' , function (data) {
			html += data
		})
		res.on('end' , function () {
			console.log(filterChapters(html));
			let index = url.split('/')[url.split('/').length-1];
			//fs.writeFile(`imooc-${index}.json`,filterChapters(html));
		})
	})
	.on('error' , function () {
		console.log('error')
	})