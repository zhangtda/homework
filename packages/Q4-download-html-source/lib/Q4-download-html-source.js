'use strict';
const scrape = require('website-scraper');
const fs = require('fs');
const path = require('path');

// let options = {urls: ['https://www.baidu.com/'], directory: './dist', };

function q4DownloadHtmlSource(option) {
    const distPath = path.join(__dirname, option.directory);
    console.log(distPath, '123')
    if (fs.existsSync(distPath)) {
        fs.rmSync(distPath, {
            recursive: true
        });
    }

    scrape(option).then((result) => {
        console.log("Website succesfully downloaded");
    }).catch((err) => {
        console.log("An error ocurred", err);
    });
}

module.exports = q4DownloadHtmlSource;
