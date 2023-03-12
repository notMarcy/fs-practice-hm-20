const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('./docs/index.html')
    const output = fs.createWriteStream('./docs/indexCOMPRESSED.html.gz')
    input.pipe(gzip).pipe(output)
}

compress()