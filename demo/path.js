const path = require('path');

const directory = path.join(__dirname);

console.log(directory);

const filepath = path.join(__dirname, 'path.js');

console.log(filepath);

const fileextension = path.extname(filepath);

console.log(fileextension);

const basename = path.basename(filepath);

console.log(basename);
