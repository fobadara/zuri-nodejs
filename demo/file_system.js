const fs = require('fs');

// Writing to a file
// fs.writeFile('files.json', JSON.stringify(['I am Abdulfatai']), (err) => {
//   if (err) throw err;
// });

// Read file
// fs.readFile('files.json',  'utf8', (err, content) => {
//   if (err) throw err;
//   console.log(content);
//  });


// append to a file
// fs.appendFile('files.json', JSON.stringify(['I am Abdulfatai']), (err) => {
//   if (err) throw err;
// });

fs.readFile('files.json', 'utf8', (err, content) => {
  if (err) throw err;

  const data = JSON.parse(content);
  data.push('I am a new data');
  fs.writeFile('files.json', JSON.stringify(data),(err) => {
    if (err) throw err;
  });
});
