'use strict';

const q4DownloadHtmlSource = require('..');
const path = require('path');
const fs = require('fs');

const distPath = path.join(__dirname, './dist');
const options = {urls: ['https://www.baidu.com/'], directory: distPath };
// 判断是否存在index.html
test('Q4-download-html-source', async () => {
    const distHtmlPath = path.join(__dirname, './dist/index.html');
    await q4DownloadHtmlSource(options);
    expect(fs.existsSync(distHtmlPath)).toBe(true);
});
