var fs = require('fs')
var ls = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(ls.length-1);
