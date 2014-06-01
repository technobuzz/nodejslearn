
var fs = require('fs'); 
var buf = fs.readFileSync('/Users/dbloom/learnu/test.log'); 
var str = buf.toString(); 
var newstring = str.split('\n'); 
console.log('split ' + newstring); 
var n = newstring.length -1; 
console.log('count in file ' + n);
