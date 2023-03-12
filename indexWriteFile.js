const fs = require('fs')

var a = 1;
const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/textNew.txt');

readStream.on('data', (chunk) => {
    writeStream.write(`\nЧасть №${a}\n`)
    writeStream.write(chunk)
    a++;
})

