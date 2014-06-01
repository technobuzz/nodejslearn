var http = require('http');
http.get( {host: 'espn.com'} , function (res) {
       console.log('response:' + res.statusCode);
}).on ('error', function(e){
console.log('error' + e.message);
});

var fs = require('fs'); 
fs.readFile('/Users/dbloom/learnu/test.log',
            'utf8',
			function (error,data){
				if (error){ 
				   throw error;
				}
				console.log('file');
			}
); 
