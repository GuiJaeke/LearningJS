const minimist = require('minimist')


var path = require('path')

var extension = path.extname('arquivo.xml')

console.log(extension)

console.log(process.argv)

var args = minimist(process.argv.slice(2))

console.log(args)