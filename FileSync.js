const {readFileSync ,writeFileSync } = require('fs')
console.log('Start')

const firstFile = readFileSync('./FSModules/SyncFile.txt','utf-8')
console.log(firstFile);