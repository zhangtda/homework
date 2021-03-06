'use strict';
const scrape = require('website-scraper');
const fs = require('fs');
const path = require('path');

// let options = {urls: ['https://www.baidu.com/'], directory: './dist', };

async function q4DownloadHtmlSource(option) {
    const distPath = path.join(__dirname, option.directory);
    if (fs.existsSync(distPath)) {
        fs.rmSync(distPath, {
            recursive: true
        });
    }
    return scrape(option);
}
// q4DownloadHtmlSource(options);
module.exports = q4DownloadHtmlSource;
