'use strict';
const scrape = require('website-scraper');
const fs = require('fs');
const path = require('path');

// let options = {urls: ['https://www.baidu.com/'], directory: path.join(__dirname, './dist')};

function q4DownloadHtmlSource(option) {
    if (fs.existsSync(option.directory)) {
        fs.rmSync(option.directory, {
            recursive: true
        });
    }
    return scrape(option);
}
// q4DownloadHtmlSource(options);
module.exports = q4DownloadHtmlSource;
