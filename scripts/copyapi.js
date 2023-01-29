const fs = require('fs')

const dir = 'build/api/'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.copyFile('api/testrequest.js', 'build/api/testrequest', (err) => {
    if (err) {
        console.error(err)
    }
})