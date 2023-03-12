const fs = require('fs')
const zlib = require('zlib')

const decompress = () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./docs/indexCOMPRESSED.html.gz')
    const output = fs.createWriteStream('./docs/indexDECOMPRESSED.html')
    input.pipe(unzip).pipe(output)
}

decompress()