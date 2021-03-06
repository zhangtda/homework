'use strict';

const q4DownloadHtmlSource = require('..');
const options = {urls: ['https://www.baidu.com/'], directory: './dist', };
const path = require('path');
const fs = require('fs');

test('Q4-download-html-source', async () => {
    const distHtmlPath = path.join(__dirname, '../dist/index.html');
    await q4DownloadHtmlSource(options);
    expect(fs.existsSync(distHtmlPath)).toBe(true);
});
