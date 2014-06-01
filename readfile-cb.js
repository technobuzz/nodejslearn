var fs = require('fs'); 
fs.readFile('/Users/dbloom/learnu/test.log',
            'utf8',
			function (error,data){
				if (error){ 
				   throw error;
				}
				console.log(data);
			}
); 
