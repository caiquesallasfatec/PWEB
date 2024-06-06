var fs = require("fs")

fileContent = fs.readFileSync('./file.txt')

console.log(fileContent.toString())

console.log('12345')