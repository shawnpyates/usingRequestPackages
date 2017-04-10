var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) => {
         throw err;
       })
       .on('response', (response) => {
         console.log("Downloading image...\n");
         console.log(`Response code: ${response.statusCode}\n`);
         console.log(`Response message: ${response.statusMessage}\n`);
         console.log(`Content type: ${response.headers['content-type']}\n`);
       })
       .on('end', () => {
         console.log("Download complete.");
       })
       .pipe(fs.createWriteStream('./future.jpg'));